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
              <a href="index.html">
                <i class="fa fa-dashboard"></i>
                <span>首页</span>
              </a>
            </li>
            <li>
                <router-link :to="{ name:'userlist'}" class="dropdown-toggle"><i class="fa fa-users"></i><span>User</span><i class="fa fa-chevron-circle-right drop-icon"></i></router-link>
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
            <li>
              <a href="#" class="dropdown-toggle">
                <i class="fa fa-bar-chart-o"></i>
                <span>Graphs</span>
                <i class="fa fa-chevron-circle-right drop-icon"></i>
              </a>
              <ul class="submenu">
                <li>
                  <a href="graphs-morris.html">
                    Morris &amp; Mixed
                  </a>
                </li>
                <li>
                  <a href="graphs-flot.html">
                    Flot
                  </a>
                </li>
                <li>
                  <a href="graphs-xcharts.html">
                    xCharts
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="dropdown-toggle">
                <i class="fa fa-edit"></i>
                <span>Forms</span>
                <i class="fa fa-chevron-circle-right drop-icon"></i>
              </a>
              <ul class="submenu">
                <li>
                  <a href="form-elements.html">
                    Form elements
                  </a>
                </li>
                <li>
                  <a href="form-wizard.html">
                    Form wizard
                  </a>
                </li>
                <li>
                  <a href="form-wizard-popup.html">
                    Form wizard popup
                  </a>
                </li>
                <li>
                  <a href="form-wysiwyg.html">
                    WYSIWYG
                  </a>
                </li>
                <li>
                  <a href="form-ckeditor.html">
                    WYSIWYG CKEditor
                  </a>
                </li>
                <li>
                  <a href="form-dropzone.html">
                    Drop File Upload
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

