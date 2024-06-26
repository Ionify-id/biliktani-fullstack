import FormKalkulatorPupuk from "@/components/form/form-kalkulator-pupuk";

export default function KalkulatorPupukPage() {
  return (
    <main>
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-[#0B6653]">
            Kalkulator Pupuk
          </h1>
          <p>
            Kalkulator Pupuk merupakan sebuah fitur yang digunakan untuk
            menghitung jumlah pupuk yang perlu disiapkan sesuai dengan komoditas
            yang dituju.
          </p>
        </div>
        <p className="mb-5">
          Silahkan isi data berikut untuk menghitung kebutuhan pupuk dengan
          hasil panen yang telah ditentukan!
        </p>
        <FormKalkulatorPupuk />
      </div>
    </main>
  );
}
