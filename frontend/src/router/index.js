import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import Signin from '../views/Signin.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import Address from '../views/Address.vue'
import Payment from '../views/Payment.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import Admin from '../views/Admin.vue'
import NotFound from '../views/404.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    beforeEnter: (to, from, next) => {
      if (!store.getters.isLoggedIn) next('/signin')
      else next()
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    beforeEnter: (to, from, next) => {
      if (!store.getters.isLoggedIn) next('/signin')
      else next()
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router