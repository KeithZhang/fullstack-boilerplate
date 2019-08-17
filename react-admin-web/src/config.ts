const menuList = [
  {
    id: '2',
    name: '系统管理',
    type: 1,
    parentId: null,
    level: 1,
    menuList: [
      {
        id: '201',
        name: '用户管理',
        type: 1,
        parentId: '2',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/auth/user-manage'
      },
      {
        id: '202',
        name: '角色管理',
        type: 1,
        parentId: '2',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/auth/role-manage'
      },
      {
        id: '203',
        name: '部门管理',
        type: 1,
        parentId: '2',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/auth/department-manage'
      },
      {
        id: '204',
        name: '门店管理',
        type: 1,
        parentId: '2',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/auth/branch-manage'
      }
    ],
    functionList: null,
    icon: 'auth',
    path: '/auth',
    children: [
      {
        id: '201',
        name: '用户管理',
        type: 1,
        parentId: '2',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/auth/user-manage'
      },
      {
        id: '202',
        name: '角色管理',
        type: 1,
        parentId: '2',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/auth/role-manage'
      },
      {
        id: '203',
        name: '部门管理',
        type: 1,
        parentId: '2',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/auth/department-manage'
      },
      {
        id: '204',
        name: '门店管理',
        type: 1,
        parentId: '2',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/auth/branch-manage'
      }
    ]
  },
  {
    id: '4',
    name: '商品中心',
    type: 1,
    parentId: null,
    level: 1,
    menuList: [
      {
        id: '401',
        name: '类目管理',
        type: 1,
        parentId: '4',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/shop/category-manage'
      },
      {
        id: '402',
        name: '型号管理',
        type: 1,
        parentId: '4',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/shop/model-manage'
      }
    ],
    functionList: null,
    children: [
      {
        id: '401',
        name: '类目管理',
        type: 1,
        parentId: '4',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/shop/category-manage'
      },
      {
        id: '402',
        name: '型号管理',
        type: 1,
        parentId: '4',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/shop/model-manage'
      }
    ],
    icon: 'shop',
    path: '/shop'
  },
  {
    id: '5',
    name: '线索中心',
    type: 1,
    parentId: null,
    level: 1,
    menuList: [
      {
        id: '501',
        name: '等级设置',
        type: 1,
        parentId: '5',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/lead/lead-setup'
      },
      {
        id: '502',
        name: '线索列表',
        type: 1,
        parentId: '5',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/lead/lead-list'
      },
      {
        id: '503',
        name: '新建线索',
        type: 1,
        parentId: '5',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/lead/new-leads'
      }
    ],
    functionList: null,
    children: [
      {
        id: '501',
        name: '等级设置',
        type: 1,
        parentId: '5',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/lead/lead-setup'
      },
      {
        id: '502',
        name: '线索列表',
        type: 1,
        parentId: '5',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/lead/lead-list'
      },
      {
        id: '503',
        name: '新建线索',
        type: 1,
        parentId: '5',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/lead/new-leads'
      }
    ],
    icon: 'lead',
    path: '/lead'
  },
  {
    id: '6',
    name: '鉴定中心',
    type: 1,
    parentId: null,
    level: 1,
    menuList: [
      {
        id: '601',
        name: '待鉴定列表',
        type: 1,
        parentId: '6',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/appraisal/uncertainty-list'
      },
      {
        id: '602',
        name: '鉴定历史',
        type: 1,
        parentId: '6',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/appraisal/identified-list'
      }
    ],
    functionList: null,
    children: [
      {
        id: '601',
        name: '待鉴定列表',
        type: 1,
        parentId: '6',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/appraisal/uncertainty-list'
      },
      {
        id: '602',
        name: '鉴定历史',
        type: 1,
        parentId: '6',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/appraisal/identified-list'
      }
    ],
    icon: 'appraisal',
    path: '/appraisal'
  },
  {
    id: '7',
    name: '采购中心',
    type: 1,
    parentId: null,
    level: 1,
    menuList: [
      {
        id: '702',
        name: '采购待审核',
        type: 1,
        parentId: '7',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/purchase/purchase-uncheck-list'
      },
      {
        id: '703',
        name: '采购单列表',
        type: 1,
        parentId: '7',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/purchase/purchase-list'
      }
    ],
    functionList: null,
    children: [
      {
        id: '702',
        name: '采购待审核',
        type: 1,
        parentId: '7',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/purchase/purchase-uncheck-list'
      },
      {
        id: '703',
        name: '采购单列表',
        type: 1,
        parentId: '7',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/purchase/purchase-list'
      }
    ],
    icon: 'purchase',
    path: '/purchase'
  },
  {
    id: '9',
    name: '仓储中心',
    type: 1,
    parentId: null,
    level: 1,
    menuList: [
      {
        id: '901',
        name: '仓库管理',
        type: 1,
        parentId: '9',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/warehouse/wms-list'
      },
      {
        id: '902',
        name: '门店库存',
        type: 1,
        parentId: '9',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/warehouse/branch-iventory-list'
      },
      {
        id: '903',
        name: '全公司库存',
        type: 1,
        parentId: '9',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/warehouse/company-iventory-list'
      },
      {
        id: '906',
        name: '入库单',
        type: 1,
        parentId: '9',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/warehouse/receipt-list'
      }
    ],
    functionList: null,
    children: [
      {
        id: '901',
        name: '仓库管理',
        type: 1,
        parentId: '9',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/warehouse/wms-list'
      },
      {
        id: '902',
        name: '门店库存',
        type: 1,
        parentId: '9',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/warehouse/branch-iventory-list'
      },
      {
        id: '903',
        name: '全公司库存',
        type: 1,
        parentId: '9',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/warehouse/company-iventory-list'
      },
      {
        id: '906',
        name: '入库单',
        type: 1,
        parentId: '9',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/warehouse/receipt-list'
      }
    ],
    icon: 'warehouse',
    path: '/warehouse'
  },
  {
    id: '10',
    name: '财务中心',
    type: 1,
    parentId: null,
    level: 1,
    menuList: [
      {
        id: '1002',
        name: '付款单列表',
        type: 1,
        parentId: '10',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/finacial/payment-list'
      },
      {
        id: '1005',
        name: '待付款',
        type: 1,
        parentId: '10',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/finacial/unpaid-list'
      }
    ],
    functionList: null,
    children: [
      {
        id: '1002',
        name: '付款单列表',
        type: 1,
        parentId: '10',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/finacial/payment-list'
      },
      {
        id: '1005',
        name: '待付款',
        type: 1,
        parentId: '10',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/finacial/unpaid-list'
      }
    ],
    icon: 'finacial',
    path: '/finacial'
  },
  {
    id: '14',
    name: '商机中心',
    type: 1,
    parentId: null,
    level: 1,
    menuList: [
      {
        id: '1401',
        name: '商机列表',
        type: 1,
        parentId: '14',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/opportunity/opportunity-list'
      }
    ],
    functionList: null,
    children: [
      {
        id: '1401',
        name: '商机列表',
        type: 1,
        parentId: '14',
        level: 2,
        menuList: null,
        functionList: null,
        path: '/opportunity/opportunity-list'
      }
    ],
    icon: 'opportunity',
    path: '/opportunity'
  }
];

const userInfo = {
  user: {
    id: 'ZhangFeng',
    name: '张峰',
    locked: null,
    phone: '18120150534',
    deptId: [8],
    deptList: null,
    position: '',
    roleList: [
      {
        id: 'R19070500000040',
        name: '管理员',
        menuIds: [
          '2',
          '201',
          '202',
          '203',
          '204',
          '4',
          '401',
          '402',
          '5',
          '501',
          '502',
          '503',
          '6',
          '601',
          '602',
          '7',
          '702',
          '703',
          '10',
          '1002',
          '1005',
          '14',
          '1401',
          '9',
          '901',
          '902',
          '903',
          '906'
        ]
      }
    ],
    avatar: null
  },
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxODEyMDE1MDUzNCIsImV4cCI6MTU2NzkyOTg0OX0.zvoW2wWE0P9VATvButJJ90oQab3fRFnZKCcrh9YltF0',
  menuList: [
    {
      id: '2',
      name: '系统管理',
      type: 1,
      parentId: null,
      level: 1,
      menuList: [
        {
          id: '201',
          name: '用户管理',
          type: 1,
          parentId: '2',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/auth/user-manage'
        },
        {
          id: '202',
          name: '角色管理',
          type: 1,
          parentId: '2',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/auth/role-manage'
        },
        {
          id: '203',
          name: '部门管理',
          type: 1,
          parentId: '2',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/auth/department-manage'
        },
        {
          id: '204',
          name: '门店管理',
          type: 1,
          parentId: '2',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/auth/branch-manage'
        }
      ],
      functionList: null,
      icon: 'auth',
      path: '/auth',
      children: [
        {
          id: '201',
          name: '用户管理',
          type: 1,
          parentId: '2',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/auth/user-manage'
        },
        {
          id: '202',
          name: '角色管理',
          type: 1,
          parentId: '2',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/auth/role-manage'
        },
        {
          id: '203',
          name: '部门管理',
          type: 1,
          parentId: '2',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/auth/department-manage'
        },
        {
          id: '204',
          name: '门店管理',
          type: 1,
          parentId: '2',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/auth/branch-manage'
        }
      ]
    },
    {
      id: '4',
      name: '商品中心',
      type: 1,
      parentId: null,
      level: 1,
      menuList: [
        {
          id: '401',
          name: '类目管理',
          type: 1,
          parentId: '4',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/shop/category-manage'
        },
        {
          id: '402',
          name: '型号管理',
          type: 1,
          parentId: '4',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/shop/model-manage'
        }
      ],
      functionList: null,
      children: [
        {
          id: '401',
          name: '类目管理',
          type: 1,
          parentId: '4',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/shop/category-manage'
        },
        {
          id: '402',
          name: '型号管理',
          type: 1,
          parentId: '4',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/shop/model-manage'
        }
      ],
      icon: 'shop',
      path: '/shop'
    },
    {
      id: '5',
      name: '线索中心',
      type: 1,
      parentId: null,
      level: 1,
      menuList: [
        {
          id: '501',
          name: '等级设置',
          type: 1,
          parentId: '5',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/lead/lead-setup'
        },
        {
          id: '502',
          name: '线索列表',
          type: 1,
          parentId: '5',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/lead/lead-list'
        },
        {
          id: '503',
          name: '新建线索',
          type: 1,
          parentId: '5',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/lead/new-leads'
        }
      ],
      functionList: null,
      children: [
        {
          id: '501',
          name: '等级设置',
          type: 1,
          parentId: '5',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/lead/lead-setup'
        },
        {
          id: '502',
          name: '线索列表',
          type: 1,
          parentId: '5',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/lead/lead-list'
        },
        {
          id: '503',
          name: '新建线索',
          type: 1,
          parentId: '5',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/lead/new-leads'
        }
      ],
      icon: 'lead',
      path: '/lead'
    },
    {
      id: '6',
      name: '鉴定中心',
      type: 1,
      parentId: null,
      level: 1,
      menuList: [
        {
          id: '601',
          name: '待鉴定列表',
          type: 1,
          parentId: '6',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/appraisal/uncertainty-list'
        },
        {
          id: '602',
          name: '鉴定历史',
          type: 1,
          parentId: '6',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/appraisal/identified-list'
        }
      ],
      functionList: null,
      children: [
        {
          id: '601',
          name: '待鉴定列表',
          type: 1,
          parentId: '6',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/appraisal/uncertainty-list'
        },
        {
          id: '602',
          name: '鉴定历史',
          type: 1,
          parentId: '6',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/appraisal/identified-list'
        }
      ],
      icon: 'appraisal',
      path: '/appraisal'
    },
    {
      id: '7',
      name: '采购中心',
      type: 1,
      parentId: null,
      level: 1,
      menuList: [
        {
          id: '702',
          name: '采购待审核',
          type: 1,
          parentId: '7',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/purchase/purchase-uncheck-list'
        },
        {
          id: '703',
          name: '采购单列表',
          type: 1,
          parentId: '7',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/purchase/purchase-list'
        }
      ],
      functionList: null,
      children: [
        {
          id: '702',
          name: '采购待审核',
          type: 1,
          parentId: '7',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/purchase/purchase-uncheck-list'
        },
        {
          id: '703',
          name: '采购单列表',
          type: 1,
          parentId: '7',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/purchase/purchase-list'
        }
      ],
      icon: 'purchase',
      path: '/purchase'
    },
    {
      id: '9',
      name: '仓储中心',
      type: 1,
      parentId: null,
      level: 1,
      menuList: [
        {
          id: '901',
          name: '仓库管理',
          type: 1,
          parentId: '9',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/warehouse/wms-list'
        },
        {
          id: '902',
          name: '门店库存',
          type: 1,
          parentId: '9',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/warehouse/branch-iventory-list'
        },
        {
          id: '903',
          name: '全公司库存',
          type: 1,
          parentId: '9',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/warehouse/company-iventory-list'
        },
        {
          id: '906',
          name: '入库单',
          type: 1,
          parentId: '9',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/warehouse/receipt-list'
        }
      ],
      functionList: null,
      children: [
        {
          id: '901',
          name: '仓库管理',
          type: 1,
          parentId: '9',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/warehouse/wms-list'
        },
        {
          id: '902',
          name: '门店库存',
          type: 1,
          parentId: '9',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/warehouse/branch-iventory-list'
        },
        {
          id: '903',
          name: '全公司库存',
          type: 1,
          parentId: '9',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/warehouse/company-iventory-list'
        },
        {
          id: '906',
          name: '入库单',
          type: 1,
          parentId: '9',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/warehouse/receipt-list'
        }
      ],
      icon: 'warehouse',
      path: '/warehouse'
    },
    {
      id: '10',
      name: '财务中心',
      type: 1,
      parentId: null,
      level: 1,
      menuList: [
        {
          id: '1002',
          name: '付款单列表',
          type: 1,
          parentId: '10',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/finacial/payment-list'
        },
        {
          id: '1005',
          name: '待付款',
          type: 1,
          parentId: '10',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/finacial/unpaid-list'
        }
      ],
      functionList: null,
      children: [
        {
          id: '1002',
          name: '付款单列表',
          type: 1,
          parentId: '10',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/finacial/payment-list'
        },
        {
          id: '1005',
          name: '待付款',
          type: 1,
          parentId: '10',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/finacial/unpaid-list'
        }
      ],
      icon: 'finacial',
      path: '/finacial'
    },
    {
      id: '14',
      name: '商机中心',
      type: 1,
      parentId: null,
      level: 1,
      menuList: [
        {
          id: '1401',
          name: '商机列表',
          type: 1,
          parentId: '14',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/opportunity/opportunity-list'
        }
      ],
      functionList: null,
      children: [
        {
          id: '1401',
          name: '商机列表',
          type: 1,
          parentId: '14',
          level: 2,
          menuList: null,
          functionList: null,
          path: '/opportunity/opportunity-list'
        }
      ],
      icon: 'opportunity',
      path: '/opportunity'
    }
  ],
  menuInfo: {
    data: [
      {
        id: '2',
        name: '系统管理',
        type: 1,
        parentId: null,
        level: 1,
        menuList: [
          {
            id: '201',
            name: '用户管理',
            type: 1,
            parentId: '2',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/auth/user-manage'
          },
          {
            id: '202',
            name: '角色管理',
            type: 1,
            parentId: '2',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/auth/role-manage'
          },
          {
            id: '203',
            name: '部门管理',
            type: 1,
            parentId: '2',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/auth/department-manage'
          },
          {
            id: '204',
            name: '门店管理',
            type: 1,
            parentId: '2',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/auth/branch-manage'
          }
        ],
        functionList: null,
        icon: 'auth',
        path: '/auth',
        children: [
          {
            id: '201',
            name: '用户管理',
            type: 1,
            parentId: '2',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/auth/user-manage'
          },
          {
            id: '202',
            name: '角色管理',
            type: 1,
            parentId: '2',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/auth/role-manage'
          },
          {
            id: '203',
            name: '部门管理',
            type: 1,
            parentId: '2',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/auth/department-manage'
          },
          {
            id: '204',
            name: '门店管理',
            type: 1,
            parentId: '2',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/auth/branch-manage'
          }
        ]
      },
      {
        id: '4',
        name: '商品中心',
        type: 1,
        parentId: null,
        level: 1,
        menuList: [
          {
            id: '401',
            name: '类目管理',
            type: 1,
            parentId: '4',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/shop/category-manage'
          },
          {
            id: '402',
            name: '型号管理',
            type: 1,
            parentId: '4',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/shop/model-manage'
          }
        ],
        functionList: null,
        children: [
          {
            id: '401',
            name: '类目管理',
            type: 1,
            parentId: '4',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/shop/category-manage'
          },
          {
            id: '402',
            name: '型号管理',
            type: 1,
            parentId: '4',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/shop/model-manage'
          }
        ],
        icon: 'shop',
        path: '/shop'
      },
      {
        id: '5',
        name: '线索中心',
        type: 1,
        parentId: null,
        level: 1,
        menuList: [
          {
            id: '501',
            name: '等级设置',
            type: 1,
            parentId: '5',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/lead/lead-setup'
          },
          {
            id: '502',
            name: '线索列表',
            type: 1,
            parentId: '5',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/lead/lead-list'
          },
          {
            id: '503',
            name: '新建线索',
            type: 1,
            parentId: '5',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/lead/new-leads'
          }
        ],
        functionList: null,
        children: [
          {
            id: '501',
            name: '等级设置',
            type: 1,
            parentId: '5',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/lead/lead-setup'
          },
          {
            id: '502',
            name: '线索列表',
            type: 1,
            parentId: '5',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/lead/lead-list'
          },
          {
            id: '503',
            name: '新建线索',
            type: 1,
            parentId: '5',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/lead/new-leads'
          }
        ],
        icon: 'lead',
        path: '/lead'
      },
      {
        id: '6',
        name: '鉴定中心',
        type: 1,
        parentId: null,
        level: 1,
        menuList: [
          {
            id: '601',
            name: '待鉴定列表',
            type: 1,
            parentId: '6',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/appraisal/uncertainty-list'
          },
          {
            id: '602',
            name: '鉴定历史',
            type: 1,
            parentId: '6',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/appraisal/identified-list'
          }
        ],
        functionList: null,
        children: [
          {
            id: '601',
            name: '待鉴定列表',
            type: 1,
            parentId: '6',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/appraisal/uncertainty-list'
          },
          {
            id: '602',
            name: '鉴定历史',
            type: 1,
            parentId: '6',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/appraisal/identified-list'
          }
        ],
        icon: 'appraisal',
        path: '/appraisal'
      },
      {
        id: '7',
        name: '采购中心',
        type: 1,
        parentId: null,
        level: 1,
        menuList: [
          {
            id: '702',
            name: '采购待审核',
            type: 1,
            parentId: '7',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/purchase/purchase-uncheck-list'
          },
          {
            id: '703',
            name: '采购单列表',
            type: 1,
            parentId: '7',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/purchase/purchase-list'
          }
        ],
        functionList: null,
        children: [
          {
            id: '702',
            name: '采购待审核',
            type: 1,
            parentId: '7',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/purchase/purchase-uncheck-list'
          },
          {
            id: '703',
            name: '采购单列表',
            type: 1,
            parentId: '7',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/purchase/purchase-list'
          }
        ],
        icon: 'purchase',
        path: '/purchase'
      },
      {
        id: '9',
        name: '仓储中心',
        type: 1,
        parentId: null,
        level: 1,
        menuList: [
          {
            id: '901',
            name: '仓库管理',
            type: 1,
            parentId: '9',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/warehouse/wms-list'
          },
          {
            id: '902',
            name: '门店库存',
            type: 1,
            parentId: '9',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/warehouse/branch-iventory-list'
          },
          {
            id: '903',
            name: '全公司库存',
            type: 1,
            parentId: '9',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/warehouse/company-iventory-list'
          },
          {
            id: '906',
            name: '入库单',
            type: 1,
            parentId: '9',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/warehouse/receipt-list'
          }
        ],
        functionList: null,
        children: [
          {
            id: '901',
            name: '仓库管理',
            type: 1,
            parentId: '9',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/warehouse/wms-list'
          },
          {
            id: '902',
            name: '门店库存',
            type: 1,
            parentId: '9',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/warehouse/branch-iventory-list'
          },
          {
            id: '903',
            name: '全公司库存',
            type: 1,
            parentId: '9',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/warehouse/company-iventory-list'
          },
          {
            id: '906',
            name: '入库单',
            type: 1,
            parentId: '9',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/warehouse/receipt-list'
          }
        ],
        icon: 'warehouse',
        path: '/warehouse'
      },
      {
        id: '10',
        name: '财务中心',
        type: 1,
        parentId: null,
        level: 1,
        menuList: [
          {
            id: '1002',
            name: '付款单列表',
            type: 1,
            parentId: '10',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/finacial/payment-list'
          },
          {
            id: '1005',
            name: '待付款',
            type: 1,
            parentId: '10',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/finacial/unpaid-list'
          }
        ],
        functionList: null,
        children: [
          {
            id: '1002',
            name: '付款单列表',
            type: 1,
            parentId: '10',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/finacial/payment-list'
          },
          {
            id: '1005',
            name: '待付款',
            type: 1,
            parentId: '10',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/finacial/unpaid-list'
          }
        ],
        icon: 'finacial',
        path: '/finacial'
      },
      {
        id: '14',
        name: '商机中心',
        type: 1,
        parentId: null,
        level: 1,
        menuList: [
          {
            id: '1401',
            name: '商机列表',
            type: 1,
            parentId: '14',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/opportunity/opportunity-list'
          }
        ],
        functionList: null,
        children: [
          {
            id: '1401',
            name: '商机列表',
            type: 1,
            parentId: '14',
            level: 2,
            menuList: null,
            functionList: null,
            path: '/opportunity/opportunity-list'
          }
        ],
        icon: 'opportunity',
        path: '/opportunity'
      }
    ],
    pathMap: [
      '/auth/user-manage',
      '/auth/role-manage',
      '/auth/department-manage',
      '/auth/branch-manage',
      '/shop/category-manage',
      '/shop/model-manage',
      '/lead/lead-setup',
      '/lead/lead-list',
      '/lead/new-leads',
      '/appraisal/uncertainty-list',
      '/appraisal/identified-list',
      '/purchase/purchase-uncheck-list',
      '/purchase/purchase-list',
      '/warehouse/wms-list',
      '/warehouse/branch-iventory-list',
      '/warehouse/company-iventory-list',
      '/warehouse/receipt-list',
      '/finacial/payment-list',
      '/finacial/unpaid-list',
      '/opportunity/opportunity-list'
    ]
  }
};

const pathMap = [
  '/auth/user-manage',
  '/auth/role-manage',
  '/auth/department-manage',
  '/auth/branch-manage',
  '/shop/category-manage',
  '/shop/model-manage',
  '/lead/lead-setup',
  '/lead/lead-list',
  '/lead/new-leads',
  '/appraisal/uncertainty-list',
  '/appraisal/identified-list',
  '/purchase/purchase-uncheck-list',
  '/purchase/purchase-list',
  '/warehouse/wms-list',
  '/warehouse/branch-iventory-list',
  '/warehouse/company-iventory-list',
  '/warehouse/receipt-list',
  '/finacial/payment-list',
  '/finacial/unpaid-list',
  '/opportunity/opportunity-list'
];

const bindGlobalDataFn = () => {
  window.menuList = menuList;
  window.userInfo = userInfo;
  window.pathMap = pathMap;
};

export default bindGlobalDataFn;
