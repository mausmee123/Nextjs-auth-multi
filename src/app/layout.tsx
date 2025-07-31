import { getServerSession } from 'next-auth';
import ClientProvider from './ClientProvider';
import './globals.css';

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <ClientProvider session={session}>{children}</ClientProvider>
      </body>
    </html>
  );
}