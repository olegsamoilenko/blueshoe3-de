import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Menu, Heading } from '~/types';

export const useGeneralStore = defineStore('general', () => {
  const headingListData = ref<Heading[]>([]);
  const blogHeading = ref<Heading[]>([]);
  const sortedBlogs = ref([]);
  const initialSorting = ref(sortedBlogs.value);
  const isMobileMenuOpen = ref(false);

  const entwicklung = [
    {
      name: 'cloudNativeDevelopment',
      href: '/leistungen/cloud-native-development',
      icon: '/img/global/icons/cloud-storage.svg'
    },
    {
      name: 'headlessCms',
      href: '/leistungen/headless-cms',
      icon: '/img/global/icons/cms_1.svg'
    },
    {
      name: 'wagtailCms',
      href: '/leistungen/wagtail-cms',
      icon: '/img/global/icons/bird_1.svg'
    },
    {
      name: 'pythonDjango',
      href: '/leistungen/python-django-agentur',
      icon: '/img/global/icons/python.svg'
    },
    {
      name: 'headlessECommerce',
      href: '/leistungen/headless-e-commerce',
      icon: '/img/global/icons/buy-online.svg'
    },
    {
      name: 'apiEntwicklung',
      href: '/leistungen/api-entwicklung',
      icon: '/img/global/icons/api_1.svg'
    },
    {
      name: 'oscarECommerce',
      href: '/leistungen/oscar-e-commerce',
      icon: '/img/global/icons/shopping-cart.svg'
    },
    {
      name: 'workflowAutomatisierung',
      href: '/leistungen/workflow-automatisierung',
      icon: '/img/global/icons/data-transformation.svg'
    }
  ];

  const beratung = [
    {
      name: 'dockerKubernetes',
      href: '/leistungen/docker-kubernetes',
      icon: '/img/global/icons/docker_kubernetes.svg'
    },
    {
      name: 'unikube',
      href: '/leistungen/unikube',
      icon: '/img/global/icons/unikube-logo.svg'
    },
    {
      name: 'djangoHurricane',
      href: '/leistungen/django-hurricane',
      icon: '/img/global/icons/hurricane-icon.svg'
    },
    {
      name: 'cloudBeratung',
      href: '/leistungen/cloud-native-beratung',
      icon: '/img/global/icons/consulting_1.svg'
    },
    {
      name: 'microserviceArchitekturen',
      href: '/leistungen/microservice-architektur-beratung',
      icon: '/img/global/icons/infrastructure_1.svg'
    },
    {
      name: 'kubernetesMigration',
      href: '/leistungen/migration-auf-kubernetes',
      icon: '/img/global/icons/migration.svg'
    },
    {
      name: 'cloudInfrastruktur',
      href: '/leistungen/cloud-infrastruktur-beratung',
      icon: '/img/global/icons/cloud-computing.svg'
    },
    {
      name: 'cloudNativeTools',
      href: '/leistungen/cloud-native-tools',
      icon: '/img/global/icons/repair.svg'
    },
    {
      name: 'cloudSicherheit',
      href: '/leistungen/cloud-sicherheit-beratung',
      icon: '/img/global/icons/cyber-security.svg'
    }
  ];

  const menu = ref<Menu[]>([
    {
      name: 'leistungen',
      href: undefined,
      dropDown: true,
      isDropDown: false,
      children: [entwicklung, beratung]
    },
    { name: 'projekte', href: '/projekte', dropDown: false },
    { name: 'unsereTools', href: '/tools', dropDown: false },
    { name: 'überUns', href: '/team', dropDown: false },
    { name: 'jobs', href: '/jobs', dropDown: false },
    { name: 'blog', href: '/blog', dropDown: false },
    { name: 'k8sPodcast', href: '/kubernetes-podcast', dropDown: false },
    { name: 'kontakt', href: '/kontakt', dropDown: false }
  ]);

  const authors = ref([
    { name: 'Robert Gutschale', isSelected: false },
    { name: 'Victor Studenyak', isSelected: false },
    { name: 'Robert Stein', isSelected: false },
    { name: 'Michael Schilonka', isSelected: false },
    { name: 'Tobias Frölich', isSelected: false },
    { name: 'Hannes Hanusch', isSelected: false },
    { name: 'Tina Söll', isSelected: false }
  ]);

  const technology = ref([
    { name: 'Helm', isSelected: false },
    { name: 'Kubernetes', isSelected: false },
    { name: 'Argo CD', isSelected: false },
    { name: 'Unikube', isSelected: false },
    { name: 'Docker', isSelected: false },
    { name: 'Telepresence', isSelected: false },
    { name: 'K3D', isSelected: false },
    { name: 'Django', isSelected: false },
    { name: 'Python', isSelected: false },
    { name: 'Gefyra', isSelected: false },
    { name: 'Vue JS', isSelected: false },
    { name: 'Grafana', isSelected: false },
    { name: 'Loki', isSelected: false },
    { name: 'Promtail', isSelected: false }
  ]);

  const productUpdates = ref([
    { name: 'Gefyra', isSelected: false },
    { name: 'Getdeck', isSelected: false },
    { name: 'Hurricane', isSelected: false },
    { name: 'Unikube', isSelected: false }
  ]);

  const topic = ref([
    { name: 'Project management', label: 'Author', isSelected: false },
    { name: 'Development', label: 'Author', isSelected: false },
    { name: 'Operation', label: 'Author', isSelected: false }
  ]);

  const filters = ref([
    { name: 'author', label: 'Author', items: authors, isOpen: false },
    { name: 'technology', label: 'Technology', items: technology, isOpen: false },
    { name: 'productUpdates', label: 'Product Updates', items: productUpdates, isOpen: false },
    { name: 'topic', label: 'Topic', items: topic, isOpen: false }
  ]);

  return {
    menu,
    headingListData,
    blogHeading,
    isMobileMenuOpen,
    filters,
    sortedBlogs,
    initialSorting
  };
});
