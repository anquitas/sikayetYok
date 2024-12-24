// ## IMPORTS --- --- ---
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test from '@/views/test.vue'
import KullaniciBilgiView from '@/views/profil/KullaniciBilgiView.vue'
import KullaniciProfilView from '@/views/profil/KullaniciProfilView.vue'
import ProfilAyarGenel from '@/views/profil/ProfilAyarGenel.vue'
import ProfilAyarlarIletisim from '@/views/profil/ProfilAyarlarIletisim.vue'
import IsletmeBilgiView from '@/views/isletme/IsletmeBilgiView.vue'
import SayfaBulunamadiView from '@/views/site/SayfaBulunamadiView.vue'
import IsletmeAyarView from '@/views/isletme/IsletmeAyarView.vue'
import IsletmeAyarGenelView from '@/views/isletme/IsletmeAyarGenelView.vue'
import IsletmeAyarKonuView from '@/views/isletme/IsletmeAyarKonuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    { // MULTI
      path: '/kullanici',
      name: 'kullanici',
      component: KullaniciProfilView,
      children: [
        {
          path: '',
          redirect: 'kullanici/genel', // Redirect to child1 by default
        },
        {
          path: 'genel',
          name: 'profilAyarGenel',
          component: ProfilAyarGenel
        },
        {
          path: 'iletisim',
          name: 'profilAyarIletisim',
          component: ProfilAyarlarIletisim
        }
      ]
    },
    {
      path: '/kullanici/:id',
      name: 'KullaniciBilgiView',
      component: KullaniciBilgiView
    },
    {
      path: '/isletme/:id',
      name: 'IsletmeBilgiView',
      component: IsletmeBilgiView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'SayfaBulunamadiView',
      component: SayfaBulunamadiView
    },
    {
      path: '/isletmeAyar',
      name: 'IsletmeAyarView',
      component: IsletmeAyarView,
      children: [
        {
          path: 'genel',
          name: 'isletmeAyarGenel',
          component:IsletmeAyarGenelView
        },
        {
          path: 'konu',
          name: 'isletmeAyarKonu',
          component:IsletmeAyarKonuView
        }
      ]
    }

  ],
})


// ## EXPORTS --- --- ---
export default router
