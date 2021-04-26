import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';

const SidebarAdminData = [
  {
    label: 'Meus Pedidos',
    path: '/admin/orders',
    icon: <FaIcons.FaCartPlus />,
    id: 'side-menu-item-orders',
  },
  {
    label: 'Meu Perfil',
    path: '/admin/profile',
    icon: <ImIcons.ImProfile />,
    id: 'side-menu-item-profile',
  },
  {
    label: 'Conversas',
    path: '/admin/chats',
    id: 'side-menu-item-chat',
  },
];

export default SidebarAdminData;
