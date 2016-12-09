<template>
  <div id="nav-col">
    <section id="col-left" class="col-left-nano">
      <div id="col-left-inner" class="col-left-nano-content">
        <div id="user-left-box" class="clearfix hidden-sm hidden-xs">
          <img alt="" src="../assets/images/bootstrap/samples/scarlet-159.png"/>
          <div class="user-box">
                  <span class="name">
                  Welcome<br/>
                  Scarlett
                  </span>
                  <span class="status">
                    <i class="fa fa-circle"></i> Online
                  </span>
          </div>
        </div>
        <div class="navbar-collapse navbar-ex1-collapse hwb-navbar-a" id="sidebar-nav" >
          <ul class="nav nav-pills nav-stacked">
            <li class="active">
              <router-link :to="{ name:'profile'}" class="dropdown-toggle"><i class="fa fa-users"></i><span>首页</span><i class="fa fa-chevron-circle-right drop-icon"></i></router-link>
            </li>
            <li>
                <router-link :to="{ name:'userlist'}" class="dropdown-toggle"><i class="fa fa-users"></i><span>列表页</span><i class="fa fa-chevron-circle-right drop-icon"></i></router-link>
              <ul class="submenu">
                <li>
                  <a href="users.html">
                    User list
                  </a>
                </li>
                <li>
                  <a href="user-profile.html">
                    User profile
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

