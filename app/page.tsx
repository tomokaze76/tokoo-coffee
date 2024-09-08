import Product from "./products/product";

export default function Home() {
   return (
      <>
         <div
            className="hero min-h-screen box-shadow"
            style={{
               backgroundImage: "url(https://images.unsplash.com/photo-1507915135761-41a0a222c709?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
               <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Selamat Datang</h1>
                  <p className="mb-5">
                     Toko kami tersedia banyak jenis kopi, mulai dari anak kecil, remaja, dewasa, hingga lanjut usia. silahkan dipilih pada menu dibawah ini
                  </p>
                  <button className="btn btn-primary"><a href="#products">Get Started</a></button>
               </div>
            </div>
         </div>
         <div className="container m-auto py-10">
            <section id="products">
               <h1 className="font-coffe">New Products</h1>
            </section>
            <div className="card-container py-10">

               <Product />

            </div>
         </div>
      </>
   );
}