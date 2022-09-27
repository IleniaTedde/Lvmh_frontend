import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TemplateHome from '../templates/Home'
//import { fetchData } from '../fetcher';
import { homeApi } from './api/home'

export default function Home({api}) {
  return (
    <>
     <TemplateHome api={api}/>
    </>
  )
}

Home.getInitialProps = async ({ query }) => {

  //const api = await fetchData(`/${query.locale}/json/export${query.slug}`);
  const api = homeApi

  return {
      api: api,
  }

}