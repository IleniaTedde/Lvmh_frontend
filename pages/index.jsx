import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import TemplateHome from '../templates/Home'
//import { fetchData } from '../fetcher';
import { homeApi } from './api/home'
import { labelsApi } from './api/labels'
import { layoutApi } from './api/layout'

export default function Home({api, labels, layout}) {
  const router = useRouter()

  // const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  // useIsomorphicLayoutEffect(() => {
  //   if(location) location.href = '/en';
  // }, [router])


  return (
    <>
     <TemplateHome api={api} labels={labels} layout={layout}/>
    </>
  )
}

Home.getInitialProps = async ({ query }) => {

  //const api = await fetchData(`/${query.locale}/json/export${query.slug}`);
  const api = homeApi;
  const labels = labelsApi;
  const layout = layoutApi;

  return {
      api: api,
      labels: labels,
      layout: layout
  }

}