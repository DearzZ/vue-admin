import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import Buttons from './views/uikits/buttons.vue'
import Icons from './views/uikits/icons.vue'
import Grid from './views/uikits/grid.vue'
import Widgets from './views/uikits/widgets.vue'
import ElementUI from './views/uikits/elementUI.vue'
import Sortable from './views/uikits/sortable.vue'
import Portlet from './views/uikits/portlet.vue'
import Timeline from './views/uikits/timeline.vue'
import Tree from './views/uikits/tree.vue'
import Message from './views/uikits/message.vue'
import TableStatic from './views/table/static.vue'
import TableFixed from './views/table/fixed.vue'
import TableChoice from './views/table/choice.vue'
import dataTable from './views/table/dataTable.vue'
import FormElements from './views/form/elements.vue'
import FormValidation from './views/form/validation.vue'
import FormWizard from './views/form/wizard.vue'
import Fileupload from './views/form/fileupload.vue'
import FormSelect from './views/form/select.vue'
import FormSlider from './views/form/slider.vue'
import FormEditor from './views/form/editor.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        hidden: true,
        children: [
            { path: '/main', component: Main, name: 'Main',hidden: true }
        ]
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: 'UI Kits',
        iconCls: 'fa fa-briefcase',//图标样式class
        children: [
            { path: '/ui/buttons', component: Buttons, name: 'Buttons' },
            { path: '/ui/icons', component: Icons, name: 'Icons' },
            { path: '/ui/grid', component: Grid, name: 'Grid' },
            { path: '/ui/widgets', component: Widgets, name: 'Widgets' },
            { path: '/ui/elementui', component: ElementUI, name: 'ElementUI' },
            { path: '/ui/sortable', component: Sortable, name: 'Sortable' },
            { path: '/ui/portlet', component: Portlet, name: 'Portlet' },
            { path: '/ui/timeline', component: Timeline, name: 'Timeline' },
            { path: '/ui/tree', component: Tree, name: 'Tree' },
            { path: '/ui/message', component: Message, name: 'Message消息提示' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Table',
        iconCls: 'fa fa-table',//图标样式class
        children: [
            { path: '/table/static', component: TableStatic, name: 'Table static'},
            { path: '/table/fixed', component: TableFixed, name: 'Table fixed' },
            { path: '/table/choice', component: TableChoice, name: 'Table choice' },
            { path: '/table/datatable', component: dataTable, name: 'dataTable' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Form',
        iconCls: 'fa fa-pencil-square-o',//图标样式class
        children: [
            { path: '/form/elements', component: FormElements, name: 'Form elements'},
            { path: '/form/validation', component: FormValidation, name: 'Form validation' },
            { path: '/form/wizard', component: FormWizard, name: 'Form wizard' },
            { path: '/form/fileupload', component: Fileupload, name: 'fileupload' },
            { path: '/form/select', component: FormSelect, name: 'Select' },
            { path: '/form/slider', component: FormSlider, name: 'Slider' },
            { path: '/form/editor', component: FormEditor, name: 'Editor' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }

    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航一',
    //     iconCls: 'el-icon-message',//图标样式class
    //     children: [
    //         { path: '/main', component: Main, name: '主页', hidden: true },
    //         { path: '/table', component: Table, name: 'Table' },
    //         { path: '/form', component: Form, name: 'Form' },
    //         { path: '/user', component: user, name: '列表' },
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航二',
    //     iconCls: 'fa fa-id-card-o',
    //     children: [
    //         { path: '/page4', component: Page4, name: '页面4' },
    //         { path: '/page5', component: Page5, name: '页面5' }
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '',
    //     iconCls: 'fa fa-address-card',
    //     leaf: true,//只有一个节点
    //     children: [
    //         { path: '/page6', component: Page6, name: '导航三' }
    //     ]
    // },

];

export default routes;