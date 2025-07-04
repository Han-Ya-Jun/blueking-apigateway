/* eslint-disable max-len */

import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';
import i18n from '@/language/i18n';

import globalConfig from '@/constant/config';

const { t } = i18n.global;

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/home.vue');
const ApiDocs = () => import(/* webpackChunkName: "ApiDocs" */ '@/views/apiDocs/index.vue');
const APIDocDetail = () => import(/* webpackChunkName: "ApiDocDetail" */ '@/views/apiDocs/doc-detail.vue');
const ApigwMain = () => import(/* webpackChunkName: 'apigw-main'*/'@/views/main.vue');
const ApigwResource = () => import(/* webpackChunkName: 'apigw-main'*/'@/views/resource/setting/index.vue');
const ApigwResourceEdit = () => import(/* webpackChunkName: 'apigw-doc'*/'@/views/resource/setting/edit.vue');
const apigwResourceVersion = () => import(/* webpackChunkName: 'apigw-main'*/'@/views/resource/version/index.vue');
const ApigwResourceImport = () => import(/* webpackChunkName: 'apigw-doc'*/'@/views/resource/setting/import.vue');
const ApigwResourceImportDoc = () => import(/* webpackChunkName: 'apigw-doc'*/'@/views/resource/setting/import-doc.vue');
const apigwStageOverview = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/stage/overview/index.vue');
const apigwStageDetail = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/stage/overview/detail-mode/index.vue');
const apigwReleaseHistory = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/stage/published/index.vue');
// const apigwStageResourceInfo = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/stage/overview/detail-mode/resource-info.vue');
// const apigwStagePluginManage = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/stage/overview/detail-mode/plugin-manage.vue');
const apigwOnlineTest = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/online-debug/index.vue');
// const apigwStageVariableManage = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/stage/overview/detail-mode/variable-manage.vue');
const ApigwPermissionApplys = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/permission/apply/index.vue');
const ApigwPermissionApps = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/permission/app/index.vue');
const ApigwPermissionRecords = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/permission/record/index.vue');
const apigwAccessLog = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/operate-data/access-log/index.vue');
const apigwAccessLogDetail = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/operate-data/access-log/detail.vue');
const apigwDashboard = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/operate-data/dashboard/index.vue');
const apigwReport = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/operate-data/report/index.vue');
const ApigwBackendService = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/backend-service/index.vue');
const ApiBasicInfo = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/basic-info/index.vue');
const ApigwOperateRecords  = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/operate-records/index.vue');
const ApigwMonitorAlarmStrategy = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/monitor/alarm-strategy/index.vue');
const ApigwMonitorAlarmHistory = () => import(/* webpackChunkName: 'apigw-env'*/'@/views/monitor/alarm-history/index.vue');
const ComponentsMain = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/index.vue');
const ComponentsIntro = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/intro/index.vue');
const ComponentsSystem = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/system/index.vue');
const ComponentsManage = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/manage/index.vue');
const SyncApigwAccess = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/manage/components/sync-access.vue');
const SyncHistory = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/manage/components/sync-history.vue');
const SyncVersion = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/manage/components/sync-version.vue');
const ComponentsCategory = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/category/index.vue');
const ComponentsAudit = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/permission/audit/index.vue');
const ComponentsPower = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/permission/power/index.vue');
const ComponentsHistory = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/permission/history/index.vue');
const ComponentsRuntimeData = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/runtime-data/index.vue');
const ComponentsRuntimeDetail = () => import(/* webpackChunkName: 'components-main'*/'@/views/components-access/runtime-data/detail.vue');
const PlatformTools = () => import(/* webpackChunkName: 'platform-tools'*/'@/views/platform-tools/index.vue');
const PlatformToolsToolbox = () => import(/* webpackChunkName: 'platform-tools'*/'@/views/platform-tools/toolbox/index.vue');
const PlatformToolsAutomatedGateway = () => import(/* webpackChunkName: 'platform-tools'*/'@/views/platform-tools/automatedGateway/index.vue');
const PlatformToolsProgrammableGateway = () => import(/* webpackChunkName: 'platform-tools'*/'@/views/platform-tools/programmableGateway/index.vue');
const McpMarket = () => import(/* webpackChunkName: 'mcp-market'*/'@/views/mcp-market/index.vue');
const McpMarketDetails = () => import(/* webpackChunkName: 'mcp-market'*/'@/views/mcp-market/components/details.vue');
const McpServerPermission = () => import(/* webpackChunkName: 'mcp-server'*/'@/views/mcp-server/components/McpPermission.vue');

// 文档一级路由出口
const docsComponent = {
  name: 'DocMain',
  template: '<router-view></router-view>',
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      isMenu: false,   // 是否作为侧边栏菜单
    },
  },
  {
    path: '/',
    name: 'apigwMain',
    component: ApigwMain,
    meta: {
      title: t('资源管理'),
      matchRoute: 'apigwMain',
      topMenu: 'home',
    },
    children: [
      {
        path: ':id/stage',
        name: 'apigwStageOverview',
        component: apigwStageOverview,
        meta: {
          title: t('环境管理'),
          matchRoute: 'apigwStageOverview',
          topMenu: 'home',
        },
      },
      {
        path: ':id/stage-detail',
        name: 'apigwStageDetail',
        component: apigwStageDetail,
        meta: {
          title: t('环境概览'),
          matchRoute: 'apigwStageOverview',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/published',
        name: 'apigwReleaseHistory',
        component: apigwReleaseHistory,
        meta: {
          title: t('发布记录'),
          matchRoute: 'apigwReleaseHistory',
          topMenu: 'home',
          // showBackIcon: true,
        },
      },
      {
        path: '/:id/resource',
        name: 'apigwResource',
        component: ApigwResource,
        meta: {
          title: t('资源配置'),
          matchRoute: 'apigwResource',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/resource/create',
        name: 'apigwResourceCreate',
        component: ApigwResourceEdit,
        meta: {
          title: t('新建资源'),
          matchRoute: 'apigwResource',
          topMenu: 'home',
          showBackIcon: true,
        },
      },
      {
        path: '/:id/resource/:resourceId/edit',
        name: 'apigwResourceEdit',
        component: ApigwResourceEdit,
        meta: {
          title: t('编辑资源'),
          matchRoute: 'apigwResource',
          topMenu: 'home',
          showBackIcon: true,
          showPageName: true,
        },
      },
      {
        path: '/:id/resource/:resourceId/clone',
        name: 'apigwResourceClone',
        component: ApigwResourceEdit,
        meta: {
          title: t('克隆资源'),
          matchRoute: 'apigwResource',
          topMenu: 'home',
          showBackIcon: true,
        },
      },
      {
        path: '/:id/version',
        name: 'apigwResourceVersion',
        component: apigwResourceVersion,
        meta: {
          title: t('资源版本'),
          matchRoute: 'apigwResourceVersion',
          topMenu: 'home',
          isCustomTopbar: 'resourceVersionOverview',
        },
      },
      {
        path: '/:id/debugging',
        name: 'apigwOnlineTest',
        component: apigwOnlineTest,
        meta: {
          title: t('在线调试'),
          matchRoute: 'apigwOnlineTest',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/resource/import',
        name: 'apigwResourceImport',
        component: ApigwResourceImport,
        meta: {
          title: t('导入资源配置'),
          matchRoute: 'apigwResource',
          topMenu: 'home',
          showBackIcon: true,
        },
      },
      {
        path: '/:id/backend',
        name: 'apigwBackendService',
        component: ApigwBackendService,
        meta: {
          title: t('后端服务'),
          matchRoute: 'apigwBackendService',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/permission/apply',
        name: 'apigwPermissionApplys',
        component: ApigwPermissionApplys,
        meta: {
          title: t('权限审批'),
          matchRoute: 'apigwPermissionApplys',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/permission/app',
        name: 'apigwPermissionApps',
        component: ApigwPermissionApps,
        meta: {
          title: t('应用权限'),
          matchRoute: 'apigwPermissionApps',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/permission/record',
        name: 'apigwPermissionRecords',
        component: ApigwPermissionRecords,
        meta: {
          title: t('审批历史'),
          matchRoute: 'apigwPermissionRecords',
          topMenu: 'home',
          showBackIcon: true,
        },
      },
      {
        path: '/:id/log',
        name: 'apigwAccessLog',
        component: apigwAccessLog,
        meta: {
          title: t('流水日志'),
          matchRoute: 'apigwAccessLog',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/access-log/:requestId',
        name: 'apigwAccessLogDetail',
        component: apigwAccessLogDetail,
        meta: {
          title: t('流水日志'),
          matchRoute: 'apigwAccessLogDetail',
          topMenu: 'home',
          isMenu: false,
        },
      },
      {
        path: '/:id/dashboard',
        name: 'apigwDashboard',
        component: apigwDashboard,
        meta: {
          title: t('仪表盘'),
          matchRoute: 'apigwDashboard',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/report',
        name: 'apigwReport',
        component: apigwReport,
        meta: {
          title: t('统计报表'),
          matchRoute: 'apigwReport',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/monitor/alarm-strategy',
        name: 'apigwMonitorAlarmStrategy',
        component: ApigwMonitorAlarmStrategy,
        meta: {
          title: t('告警策略'),
          matchRoute: 'apigwMonitorAlarmStrategy',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/monitor/alarm-history',
        name: 'apigwMonitorAlarmHistory',
        component: ApigwMonitorAlarmHistory,
        meta: {
          title: t('告警记录'),
          matchRoute: 'apigwMonitorAlarmHistory',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/resource/import-doc',
        name: 'apigwResourceImportDoc',
        component: ApigwResourceImportDoc,
        meta: {
          title: t('导入资源文档'),
          matchRoute: 'apigwResource',
          topMenu: 'home',
          showBackIcon: true,
        },
      },
      {
        path: '/:id/basic',
        name: 'apigwBasicInfo',
        component: ApiBasicInfo,
        meta: {
          title: t('基本信息'),
          matchRoute: 'apigwBasicInfo',
          topMenu: 'home',
        },
      },
      {
        path: '/:id/mcp-permission',
        name: 'mcpPermission',
        component: McpServerPermission,
        meta: {
          title: t('权限审批'),
          matchRoute: 'mcpServer',
          topMenu: 'home',
          showBackIcon: true,
        },
      },
      // MCP 服务器
      {
        path: '/:id/mcp-server',
        name: 'mcpServer',
        component: () => import('@/views/mcp-server/index.vue'),
        meta: {
          title: 'MCP Server',
          matchRoute: 'mcpServer',
          topMenu: 'mcpServer',
        },
      },
      // MCP 服务器详情
      {
        path: '/:id/mcp-server/detail/:serverId',
        name: 'mcpServerDetail',
        component: () => import('@/views/mcp-server/detail/index.vue'),
        meta: {
          title: t('详情'),
          matchRoute: 'mcpServer',
          topMenu: 'mcpServer',
        },
      },
      {
        path: '/:id/audit',
        name: 'apigwOperateRecords',
        component: ApigwOperateRecords,
        meta: {
          title: t('操作记录'),
          matchRoute: 'apigwOperateRecords',
        },
      },
    ],
  },
  // 文档路由映射
  {
    path: `${globalConfig.PREV_URL}`,
    redirect: `${globalConfig.PREV_URL}/api-docs/`,
    name: 'docsMain',
    component: docsComponent,
    children: [
      {
        path: 'api-docs/:curTab?',
        name: 'apiDocs',
        component: ApiDocs,
        meta: {
          matchRoute: 'apiDocs',
          topMenu: 'apiDocs',
          notAppHeader: true,
          isDocRouter: true,
          isMenu: false,   // 是否作为侧边栏菜单
        },
      },
      {
        path: 'api-docs/:curTab/:board?/:targetName/:componentName?',
        name: 'apiDocDetail',
        component: APIDocDetail,
        meta: {
          matchRoute: 'apiDocDetail',
          topMenu: 'apiDocs',
        },
      },
    ],
  },
  // 组件管理
  {
    path: '/components',
    name: 'componentsMain',
    component: ComponentsMain,
    redirect: '/components/access',
    meta: {
      title: t('组件管理'),
      matchRoute: 'componentsMain',
      topMenu: 'componentsMain',
    },
    children: [
      {
        path: 'intro',
        name: 'componentsIntro',
        component: ComponentsIntro,
        meta: {
          title: t('简介'),
          matchRoute: 'componentsIntro',
          topMenu: 'componentsMain',
        },
      },
      {
        path: 'system',
        name: 'componentsSystem',
        component: ComponentsSystem,
        meta: {
          title: t('系统管理'),
          matchRoute: 'componentsSystem',
          topMenu: 'componentsMain',
        },
      },
      {
        path: 'access',
        name: 'componentsManage',
        component: ComponentsManage,
        meta: {
          title: t('组件管理'),
          matchRoute: 'componentsManage',
          topMenu: 'componentsMain',
        },
      },
      {
        path: 'sync',
        name: 'syncApigwAccess',
        component: SyncApigwAccess,
        meta: {
          title: t('同步组件配置到 API 网关'),
          matchRoute: 'syncApigwAccess',
          topMenu: 'componentsMain',
          showBackIcon: true,
        },
      },
      {
        path: 'history',
        name: 'syncHistory',
        component: SyncHistory,
        meta: {
          title: t('组件同步历史'),
          matchRoute: 'syncHistory',
          topMenu: 'componentsMain',
          showBackIcon: true,
        },
      },
      {
        path: 'version',
        name: 'syncVersion',
        component: SyncVersion,
        meta: {
          title: t('组件同步版本'),
          matchRoute: 'syncVersion',
          topMenu: 'componentsMain',
          showBackIcon: true,
        },
      },
      {
        path: 'category',
        name: 'componentsCategory',
        component: ComponentsCategory,
        meta: {
          title: t('文档分类'),
          matchRoute: 'componentsCategory',
          topMenu: 'componentsMain',
        },
      },
      {
        path: 'permission',
        name: 'componentsPermission',
        component: docsComponent,
        meta: {
          title: t('权限管理'),
          matchRoute: 'componentsPermission',
          topMenu: 'componentsMain',
        },
        children: [
          {
            path: 'apply',
            name: 'permissionApply',
            component: ComponentsAudit,
            meta: {
              title: t('权限审批'),
              matchRoute: 'permissionApply',
              topMenu: 'componentsMain',
            },
          },
          {
            path: 'power',
            name: 'permissionPower',
            component: ComponentsPower,
            meta: {
              title: t('应用权限'),
              matchRoute: 'permissionPower',
              topMenu: 'componentsMain',
            },
          },
          {
            path: 'record',
            name: 'permissionRecord',
            component: ComponentsHistory,
            meta: {
              title: t('审批历史'),
              matchRoute: 'permissionRecord',
              topMenu: 'componentsMain',
            },
          },
        ],
      },
      {
        path: 'runtime-data',
        name: 'componentsRuntimeData',
        component: ComponentsRuntimeData,
        meta: {
          title: t('实时运行数据'),
          matchRoute: 'componentsRuntimeData',
          topMenu: 'componentsMain',
        },
      },
      {
        path: 'system/:system/detail',
        name: 'componentsRuntimeDetail',
        component: ComponentsRuntimeDetail,
        meta: {
          title: t('系统实时概况'),
          matchRoute: 'componentsRuntimeDetail',
          topMenu: 'componentsMain',
          showBackIcon: true,
        },
      },
    ],
  },

  // 平台工具
  {
    path: '/platform-tools',
    name: 'platformTools',
    redirect: '/platform-tools/toolbox',
    component: PlatformTools,
    meta: {
      title: t('平台工具'),
      matchRoute: 'platformTools',
      topMenu: 'platformTools',
    },
    children: [
      {
        path: 'toolbox',
        name: 'platformToolsToolbox',
        component: PlatformToolsToolbox,
        meta: {
          title: t('工具箱'),
          matchRoute: 'platformToolsToolbox',
          topMenu: 'platformTools',
        },
      },
      {
        path: 'automated-gateway',
        name: 'platformToolsAutomatedGateway',
        component: PlatformToolsAutomatedGateway,
        meta: {
          title: t('自动化接入网关'),
          matchRoute: 'platformToolsAutomatedGateway',
          topMenu: 'platformTools',
        },
      },
      {
        path: 'programmable-gateway',
        name: 'platformToolsProgrammableGateway',
        component: PlatformToolsProgrammableGateway,
        meta: {
          title: t('可编程网关'),
          matchRoute: 'platformToolsProgrammableGateway',
          topMenu: 'platformTools',
        },
      },
    ],
  },

  // MCP 市场
  {
    path: '/mcp-market',
    name: 'mcpMarket',
    component: McpMarket,
    meta: {
      title: t('MCP 市场'),
      matchRoute: 'mcpMarket',
      topMenu: 'mcpMarket',
    },
  },
  {
    path: '/mcp-market-details/:id',
    name: 'mcpMarketDetails',
    component: McpMarketDetails,
    meta: {
      title: t('MCP 详情'),
      matchRoute: 'mcpMarketDetails',
      topMenu: 'mcpMarket',
    },
  },

  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(window.SITE_URL),
  routes,
});

router.beforeEach((to: any, from: any) => {
  const { name: toName } = to;
  const { name: fromName } = from;
  if (toName === 'apigwResource') {
    if (fromName === 'apigwResourceEdit') {
      to.meta.pageStatus = true;
    }
    // const commonStore = useCommon();
    // 可编程网关不可访问
    // if (commonStore?.curApigwData?.kind === 1) {
    //   return {
    //     name: '404',
    //   };
    // }
  }
  return true;
});

export default router;
