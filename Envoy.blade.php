@servers(['web' => 'deployer@7up.tv'])

@task('list', ['on' => 'web'])
    ls -l
@endtask

@setup
    $repository = 'git@gitlab.com:7up-tv/front-end.git';

    $staging_dir = '/var/www/7up.tv/front-end';
    $production_dir = '/var/www/7up.tv/front-end';
@endsetup

@story('deploy_staging')
    update_repository_staging
    build_project_staging
@endstory

@story('deploy_production')
    update_repository_production
    build_project_production
@endstory

{{-- Staging tasks --}}
@task('update_repository_staging')
    echo 'Pulling Changes'
    cd {{ $staging_dir }}
    git checkout master
    git pull
@endtask

@task('build_project_staging')
    echo 'Building project'
    cd {{ $staging_dir }}
    yarn

    pm2 reload 7uptv-staging
@endtask

{{-- Production tasks --}}
@task('update_repository_production')
    echo 'Pulling Changes'
    cd {{ $production_dir }}
    git checkout production
    git pull
@endtask

@task('build_project_production')
    echo 'Building project'
    cd {{ $production_dir }}
    yarn
    yarn build

    pm2 reload 7uptv-production
@endtask
