import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} ShoesStore. All rights reserved.
    </footer>
  );
}
