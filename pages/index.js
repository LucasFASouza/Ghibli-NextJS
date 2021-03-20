import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ghibli NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <Card year='1986' title='Castle in the Sky' director='Hayao Miyazaki' description="The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world." isReaveled={true} />
        <Card year='1988' title='Grave of the Fireflies' director='Isao Takahata' description="In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle."  isReaveled={true}/>
        <Card year='1986' title='Castle in the Sky' director='Hayao Miyazaki' description="The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world." isReaveled={false} />
        <Card year='1988' title='Grave of the Fireflies' director='Isao Takahata' description="In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle." isReaveled={false}/>
        <Card year='1986' title='Castle in the Sky' director='Hayao Miyazaki' description="The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world." isReaveled={false}/>
        <Card year='1988' title='Grave of the Fireflies' director='Isao Takahata' description="In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle." isReaveled={false}/>
        <Card year='1986' title='Castle in the Sky' director='Hayao Miyazaki' description="The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world." isReaveled={false}/>

      </main>
    </Layout>
  );
}
