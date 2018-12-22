// Core Components
import Toolbar from '../components/core/Toolbar.vue';
import Navigation from '../components/core/NavigationDrawer.vue';
import Breadcrumbs from '../components/core/Breadcrumbs.vue';
import PageFooter from '../components/core/PageFooter.vue';

import Widget from '../components/Widget.vue';
import SocialWidget from '../components/SocialWidget.vue';
import DataTable from '../components/DataTable.vue';
import TimeLine from '../components/TimeLine.vue';
import UserTreeView from '../components/UserTreeView.vue';
import Stepper from '../components/Stepper.vue';

import LocationStatistic from '../components/statistics/LocationStatistic.vue';
import SiteViewStatistic from '../components/statistics/SiteViewStatistic.vue';
import TotalEarningsStatistic from '../components/statistics/TotalEarningsStatistic.vue';

function setupComponents(Vue){

  Vue.component('toolbar', Toolbar);
  Vue.component('navigation', Navigation);
  Vue.component('breadcrumbs', Breadcrumbs);
  Vue.component('page-footer', PageFooter);
  Vue.component('widget', Widget);
  Vue.component('social-widget', SocialWidget);
  Vue.component('data-table', DataTable);
  Vue.component('time-line', TimeLine);
  Vue.component('user-tree-view', UserTreeView);
  Vue.component('stepper', Stepper);

  Vue.component('location-statistic', LocationStatistic);
  Vue.component('site-view-statistic', SiteViewStatistic);
  Vue.component('total-earnings-statistic', TotalEarningsStatistic);
}


export {
  setupComponents
}
