'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FormDownloadPage() {
  const router = useRouter();

  useEffect(() => {
    // Trigger file download
    window.location.href = '/api/form';
    router.push('/');
  }, []);

  return <p>Downloading form, redirecting...</p>;
}