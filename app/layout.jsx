import "./globals.css";

export const metadata = {
  title: "Kalakari Chronicles",
  description: "crafts and art works by Sharvari Palande"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased flex justify-center"
      >
        <div className="max-w-[1920px] h-auto w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
