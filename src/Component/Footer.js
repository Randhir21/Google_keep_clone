import React from 'react'
import './style.css';
export default function Footer() {
    const year=new Date().getFullYear();
    return (
        <div className='footer_div'>
            <footer>
                <p>copyright ©️  {year}</p>
                <p>By: Randhir Pratap Singh<br/>Email: rps85071@gmail.com</p>
                <p>M.O.B: 8051379149</p>
            </footer>
        </div>
    )
}
