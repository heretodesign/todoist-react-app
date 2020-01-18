import React from 'react'
import { Sidebar } from './Sidebar'

export const Content = () => {

    const x =1;

    return (
        <section className="content" data-testid="content">
           <Sidebar />
        </section>
    )
}
