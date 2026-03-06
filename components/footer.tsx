export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-card/50 py-12 ">
      <div className="px-6 pt-8 border-t border-border flex justify-center items-center flex-wrap gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Chao Vanthoung. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
