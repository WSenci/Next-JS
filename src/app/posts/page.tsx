'use client'

import Link from 'next/link';
import styles from '../page.module.css'
//import { Metadata } from "next";
import useSWR from 'swr';


/*export const metadata: Metadata = {
    title: 'Pagina Posts',
    description: 'Lista de posts'
}*/


/*
export default async function Posts(){
    async function getPosts() {
        const resultado = await fetch('https://dummyjson.com/posts')
        const dados = await resultado.json
        console.log(dados)
    }
    return(
        <main >
            <h1 className={styles.main}> Posts</h1>
            <Link href={'/'}>Voltar</Link>
        </main>
    )
}
*/

interface Post {
    id: number
    title: string
    tags: string[]
    reactions: {
        likes: number
    }
}

export default function Posts() {
    const { data, isLoading } = useSWR('https://dummyjson.com/posts', async (url) => {
        const resposta = await fetch(url)
        const dados = await resposta.json()
        return dados
    })

    return (
        <main className={styles.main}>
            <h1> Posts</h1>
            {
                data && data.posts.map((post: Post) => (
                    <p key={post.id}>
                        <p>{post.title} - Likes = {post.reactions.likes}
                        </p>
                        <p>
                            {
                                post.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))
                            }
                        </p>
                        <hr />
                        <p>
                            Posts: {data ? data.total : '0'}
                        </p>
                    </p>

                ))
            }
            <Link href={'/'}>Voltar</Link>
        </main>
    )

}