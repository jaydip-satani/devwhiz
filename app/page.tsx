// import styles from "./page.module.css";
// import type { Metadata } from 'next'
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import React from 'react';


// export const metadata: Metadata = {
//   title: 'Welcome to DevWhiz',
//   description: '...',
// }
// export default function Home() {

//   return (
//     <>
//       <div className={styles.page}>
//         <main className={styles.main}>

//         </main>
//       </div>
//     </>
//   );
// }
import { Metadata } from 'next';
import HomeContent from '../app/components/homeContent'; // Import the client component

export const metadata: Metadata = {
  title: 'Welcome to DevWhiz',
  description: 'Your go-to blog for insightful articles and resources in the tech world.',
};

export default function Home() {
  return (
    <>
      <HomeContent /> {/* Render the client component */}
    </>
  );
}
