<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-12">
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li class="active"><span>Dashboard</span></li>
          </ol>
          <h1>Dashboard</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="main-box infographic-box">
            <i class="fa fa-user red-bg"></i>
            <span class="headline">Users</span>
            <span class="value">2.562</span>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="main-box infographic-box">
            <i class="fa fa-shopping-cart emerald-bg"></i>
            <span class="headline">Purchases</span>
            <span class="value">658</span>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="main-box infographic-box">
            <i class="fa fa-money green-bg"></i>
            <span class="headline">Income</span>
            <span class="value">&#36;8.400</span>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="main-box infographic-box">
            <i class="fa fa-eye yellow-bg"></i>
            <span class="headline">Monthly Visits</span>
            <span class="value">12.526</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="main-box small-graph-box red-bg">
            <span class="value">2.562</span>
            <span class="headline">Users</span>
            <div class="progress">
              <div style="width: 60%;" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" role="progressbar" class="progress-bar">
                <span class="sr-only">60% Complete</span>
              </div>
            </div>
  <span class="subinfo">
  <i class="fa fa-arrow-circle-o-up"></i> 10% higher than last week
  </span>
  <span class="subinfo">
  <i class="fa fa-users"></i> 29 new users
  </span>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="main-box small-graph-box emerald-bg">
            <span class="value">69.600</span>
            <span class="headline">Visits</span>
            <div class="progress">
              <div style="width: 84%;" aria-valuemax="100" aria-valuemin="0" aria-valuenow="84" role="progressbar" class="progress-bar">
                <span class="sr-only">84% Complete</span>
              </div>
            </div>
  <span class="subinfo">
  <i class="fa fa-arrow-circle-o-down"></i> 22% less than last week
  </span>
  <span class="subinfo">
  <i class="fa fa-globe"></i> 84.912 last week
  </span>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 hidden-sm">
          <div class="main-box small-graph-box green-bg">
            <span class="value">923</span>
            <span class="headline">Orders</span>
            <div class="progress">
              <div style="width: 42%;" aria-valuemax="100" aria-valuemin="0" aria-valuenow="42" role="progressbar" class="progress-bar">
                <span class="sr-only">42% Complete</span>
              </div>
            </div>
  <span class="subinfo">
  <i class="fa fa-arrow-circle-o-up"></i> 15% higher than last week
  </span>
  <span class="subinfo">
  <i class="fa fa-shopping-cart"></i> 8 new orders
  </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
