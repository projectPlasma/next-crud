import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextJS CRUD App',
  description: 'Playing with NextJS CRUD',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-full mx-auto p-4'>
          <Navbar />
          <div className=''>{children}</div>
        </div>
      </body>
    </html>
  );
}
