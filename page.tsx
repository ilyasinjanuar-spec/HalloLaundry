"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight, CheckCircle2, Clock3, Instagram, MapPin, Menu, MessageCircle,
  PackageCheck, ShieldCheck, Sparkles, Truck, WashingMachine, X, Facebook,
  Calculator, ChevronDown, Phone, Star, Shirt, BedDouble, Layers3
} from "lucide-react";
import { kiloan, satuan } from "@/lib/pricing";

const WA = "6285765363475";
const money = (n: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [weight, setWeight] = useState("3");
  const [selected, setSelected] = useState("Cuci komplit");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [activeTab, setActiveTab] = useState<"kiloan" | "satuan">("kiloan");
  const estimate = useMemo(() => (kiloan.find(x => x.name === selected)?.price ?? 0) * Math.max(0, Number(weight) || 0), [selected, weight]);
  const orderMessage = `Halo HALLO LAUNDRY, saya ingin bertanya/pesan.%0A nama: ${encodeURIComponent(name)}%0A Layanan: ${encodeURIComponent(selected)}%0A Berat: ${encodeURIComponent(weight)} kg%0A Catatan: ${encodeURIComponent(notes)}%0A Estimasi: ${encodeURIComponent(money(estimate))}`;
  const waLink = `https://wa.me/${WA}?text=${orderMessage}`;
  const nav = [["Beranda","#beranda"],["Layanan","#layanan"],["Daftar harga","#harga"],["Cara kerja","#cara-kerja"],["Kontak","#kontak"]];

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="bg-[#0c766f] text-white text-xs">
        <div className="container-shell flex flex-wrap items-center justify-between gap-2 py-2.5">
          <span className="flex items-center gap-2"><Sparkles size={14}/> Laundry bersih, wangi, dan rapi di Botania 1</span>
          <a className="flex items-center gap-2 opacity-95 hover:opacity-75" href={`https://wa.me/${WA}`}><Phone size={13}/> 0857-6536-3475</a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#e4efec] glass">
        <div className="container-shell flex h-[76px] items-center justify-between">
          <a href="#beranda" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0b9488] text-white shadow-lg shadow-teal-900/15"><WashingMachine size={24}/></div>
            <div><div className="text-[17px] font-black tracking-tight">HALLO <span className="text-[#0b9488]">LAUNDRY</span></div><div className="text-[10px] font-semibold tracking-[.18em] text-[#71858b]">BERSIH • WANGI • RAPI</div></div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">{nav.map(([label,href])=><a key={href} href={href} className="text-sm font-semibold text-[#50666d] transition hover:text-[#0b9488]">{label}</a>)}</nav>
          <a href={`https://wa.me/${WA}`} className="btn-main hidden text-sm md:inline-flex"><MessageCircle size={17}/> Pesan sekarang</a>
          <button aria-label="Buka menu" onClick={()=>setMobileOpen(!mobileOpen)} className="rounded-xl border border-[#d9e9e5] p-2 md:hidden">{mobileOpen?<X/>:<Menu/>}</button>
        </div>
        {mobileOpen && <div className="container-shell grid gap-1 pb-4 md:hidden">{nav.map(([label,href])=><a onClick={()=>setMobileOpen(false)} key={href} href={href} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-[#e6f8f4]">{label}</a>)}</div>}
      </header>

      <section id="beranda" className="gradient-hero relative">
        <div className="container-shell grid items-center gap-12 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-xs font-bold text-[#08766e] shadow-sm"><span className="h-2 w-2 rounded-full bg-[#0b9488]"/> SAHABAT PAKAIAN & KELUARGA</div>
            <h1 className="max-w-[650px] text-5xl font-black leading-[1.08] tracking-[-.055em] text-[#102f39] md:text-7xl">Pakaian bersih,<br/><span className="text-[#0b9488]">hari lebih</span> nyaman.</h1>
            <p className="mt-6 max-w-[510px] text-base leading-8 text-[#5b7379] md:text-lg">Serahkan urusan cucian kepada kami. Mulai dari laundry kiloan hingga karpet, selimut, dan bedcover—ditangani dengan teliti.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a className="btn-main" href={`https://wa.me/${WA}`}><MessageCircle size={18}/> Konsultasi via WhatsApp <ArrowRight size={17}/></a><a className="btn-light" href="#harga">Lihat daftar harga</a></div>
            <div className="mt-10 flex flex-wrap gap-7 text-sm text-[#527078]"><span className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#0b9488]"/> Ditangani dengan teliti</span><span className="flex items-center gap-2"><Clock3 size={18} className="text-[#0b9488]"/> Pilihan reguler 2 hari</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute -right-8 top-3 h-48 w-48 rounded-full bg-[#bcece2] blur-3xl"/>
            <div className="relative rounded-[34px] border border-white/80 bg-white/75 p-5 soft-shadow md:p-7">
              <div className="flex items-center justify-between"><div><p className="section-kicker">Perawatan pakaian</p><h2 className="mt-2 text-2xl font-black">Fresh every day.</h2></div><div className="rounded-2xl bg-[#e6f8f4] p-3 text-[#0b9488]"><Shirt size={28}/></div></div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-3xl bg-[#e8f7f3] p-5"><WashingMachine size={30} className="text-[#0b9488]"/><p className="mt-8 font-bold">Laundry kiloan</p><p className="mt-1 text-xs text-[#688087]">Praktis untuk harian</p></div>
                <div className="rounded-3xl bg-[#f0f4ff] p-5"><BedDouble size={30} className="text-[#5878bb]"/><p className="mt-8 font-bold">Bedcover & selimut</p><p className="mt-1 text-xs text-[#688087]">Perawatan item besar</p></div>
                <div className="rounded-3xl bg-[#fff5e9] p-5"><Layers3 size={30} className="text-[#c18a42]"/><p className="mt-8 font-bold">Karpet</p><p className="mt-1 text-xs text-[#688087]">Bersih hingga serat</p></div>
                <div className="rounded-3xl bg-[#f7efff] p-5"><Sparkles size={30} className="text-[#9464b6]"/><p className="mt-8 font-bold">Finishing rapi</p><p className="mt-1 text-xs text-[#688087]">Wangi dan tertata</p></div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#102f39] px-5 py-4 text-white"><div><p className="text-xs text-white/65">Lokasi layanan</p><p className="mt-1 text-sm font-bold">Botania 1, Batam</p></div><MapPin size={22} className="text-[#80dfce]"/></div>
            </div>
            <div className="absolute -bottom-5 -left-6 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl md:flex"><div className="rounded-xl bg-[#e6f8f4] p-2 text-[#0b9488]"><CheckCircle2/></div><div><p className="text-xs font-extrabold">Bersih • Wangi • Rapi</p><p className="text-[11px] text-[#71858b]">Komitmen HALLO LAUNDRY</p></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8f0ed] bg-white">
        <div className="container-shell grid grid-cols-2 gap-5 py-7 md:grid-cols-4">
          {[["01","Pilih layanan"],["02","Kirim detail pesanan"],["03","Kami proses cucian"],["04","Ambil saat siap"]].map(([n,t])=><div key={n} className="flex items-center gap-3"><span className="text-2xl font-black text-[#9bd8cc]">{n}</span><span className="text-sm font-bold text-[#38545d]">{t}</span></div>)}
        </div>
      </section>

      <section id="layanan" className="container-shell py-20 md:py-24">
        <div className="max-w-2xl"><p className="section-kicker">Layanan kami</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Perawatan lengkap untuk kebutuhan rumah tangga.</h2><p className="mt-4 leading-7 text-[#6b8085]">Pilih layanan sesuai kebutuhan. Untuk item dengan kondisi khusus atau noda berat, konsultasikan dahulu agar dapat kami periksa.</p></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[{icon:WashingMachine,title:"Laundry kiloan",desc:"Cuci komplit, cuci lipat, cuci saja, hingga setrika saja.",tag:"Reguler 2 hari"},{icon:BedDouble,title:"Selimut & bedcover",desc:"Pilihan layanan untuk selimut dan bedcover berbagai ukuran.",tag:"Harga per item"},{icon:Layers3,title:"Cuci karpet",desc:"Karpet tipis, sedang, tebal, hingga karpet bulu / shaggy.",tag:"Harga per m²"},{icon:Sparkles,title:"Treatment noda",desc:"Penanganan khusus menyesuaikan bahan dan kondisi noda.",tag:"Konsultasi dahulu"}].map((s,i)=><article key={s.title} className="group rounded-[26px] border border-[#e4eeeb] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#164e4a]/[.06]"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e6f8f4] text-[#0b9488] transition group-hover:bg-[#0b9488] group-hover:text-white"><s.icon size={27}/></div><h3 className="mt-6 text-lg font-extrabold">{s.title}</h3><p className="mt-2 min-h-[72px] text-sm leading-6 text-[#71858b]">{s.desc}</p><span className="mt-4 inline-flex rounded-full bg-[#f0f8f6] px-3 py-1.5 text-[11px] font-bold text-[#0b8178]">{s.tag}</span></article>)}
        </div>
      </section>

      <section id="harga" className="bg-[#edf7f4] py-20 md:py-24">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">Harga transparan</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Daftar harga layanan.</h2><p className="mt-3 text-sm text-[#6b8085]">Harga yang tercantum adalah harga reguler kiloan dan item satuan.</p></div><div className="inline-flex w-fit rounded-full border border-[#d6e9e3] bg-white p-1"><button onClick={()=>setActiveTab("kiloan")} className={`rounded-full px-5 py-2.5 text-sm font-bold ${activeTab==="kiloan"?"bg-[#0b9488] text-white":"text-[#5d747a]"}`}>Kiloan</button><button onClick={()=>setActiveTab("satuan")} className={`rounded-full px-5 py-2.5 text-sm font-bold ${activeTab==="satuan"?"bg-[#0b9488] text-white":"text-[#5d747a]"}`}>Satuan</button></div></div>
          {activeTab==="kiloan" ? <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{kiloan.map((p,i)=><div key={p.name} className="rounded-2xl border border-[#e2eeea] bg-white p-5"><div className="flex items-start justify-between gap-3"><div><p className="font-extrabold">{p.name}</p><p className="mt-1 text-xs text-[#7a8d91]">{p.detail}</p></div>{i===0&&<span className="rounded-full bg-[#e3f7f1] px-2.5 py-1 text-[10px] font-extrabold text-[#08766e]">Favorit</span>}</div><p className="mt-5 text-2xl font-black text-[#0b9488]">{money(p.price)}<span className="text-xs font-semibold text-[#849398]"> / kg</span></p><p className="mt-1 text-[11px] text-[#849398]">Estimasi waktu reguler: 2 hari</p></div>)}</div> : <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{satuan.map(p=><div key={p.name} className="flex items-center justify-between gap-3 rounded-2xl border border-[#e2eeea] bg-white p-4"><div><p className="text-sm font-bold">{p.name}</p><p className="mt-1 text-xs text-[#829397]">{p.unit}</p></div><p className="whitespace-nowrap text-sm font-black text-[#0b9488]">{p.price}</p></div>)}</div>}
          <div className="mt-6 rounded-2xl border border-dashed border-[#b7d9d0] bg-white/70 p-4 text-sm leading-6 text-[#61787d]"><strong className="text-[#25464d]">Layanan Next Day:</strong> Tanyakan ketersediaan dan harga melalui WhatsApp sebelum menyerahkan cucian. Harga Next Day belum ditetapkan di daftar ini.</div>
        </div>
      </section>

      <section className="container-shell py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div><p className="section-kicker">Kalkulator sederhana</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Hitung estimasi biaya cucianmu.</h2><p className="mt-4 leading-7 text-[#6b8085]">Masukkan layanan dan perkiraan berat. Total ini merupakan estimasi awal; biaya akhir mengikuti berat hasil penimbangan dan konfirmasi petugas.</p><div className="mt-7 flex items-center gap-3 text-sm text-[#587178]"><Calculator className="text-[#0b9488]"/> Perhitungan otomatis berdasarkan tarif reguler.</div></div>
          <div className="rounded-[28px] border border-[#e2eeea] bg-white p-6 soft-shadow md:p-8">
            <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">Jenis layanan<select value={selected} onChange={e=>setSelected(e.target.value)} className="mt-2 w-full rounded-xl border border-[#dce9e5] bg-[#fbfdfc] px-4 py-3 outline-none focus:border-[#0b9488]">{kiloan.map(x=><option key={x.name}>{x.name}</option>)}</select></label><label className="text-sm font-bold">Perkiraan berat (kg)<input type="number" min="0" step="0.1" value={weight} onChange={e=>setWeight(e.target.value)} className="mt-2 w-full rounded-xl border border-[#dce9e5] bg-[#fbfdfc] px-4 py-3 outline-none focus:border-[#0b9488]"/></label></div>
            <div className="mt-6 rounded-2xl bg-[#eaf8f4] p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#60827c]">Estimasi total</p><p className="mt-2 text-4xl font-black tracking-tight text-[#08766e]">{money(estimate)}</p><p className="mt-2 text-xs text-[#708a87]">Belum termasuk biaya tambahan jika ada treatment khusus.</p></div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="text-sm font-bold">Nama pemesan<input value={name} onChange={e=>setName(e.target.value)} placeholder="Nama kamu" className="mt-2 w-full rounded-xl border border-[#dce9e5] px-4 py-3 font-normal outline-none focus:border-[#0b9488]"/></label><label className="text-sm font-bold">Nomor WhatsApp<input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="08xxxxxxxxxx" className="mt-2 w-full rounded-xl border border-[#dce9e5] px-4 py-3 font-normal outline-none focus:border-[#0b9488]"/></label></div>
            <label className="mt-4 block text-sm font-bold">Catatan pesanan<textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={2} placeholder="Contoh: ada noda / jemput ke rumah..." className="mt-2 w-full rounded-xl border border-[#dce9e5] px-4 py-3 font-normal outline-none focus:border-[#0b9488]"/></label>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-main mt-5 w-full"><MessageCircle size={18}/> Kirim pesanan ke WhatsApp <ArrowRight size={17}/></a>
            <p className="mt-3 text-center text-[11px] text-[#87979a]">Tombol membuka WhatsApp untuk konfirmasi. Form ini belum menyimpan pesanan ke database.</p>
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="bg-[#102f39] py-20 text-white md:py-24">
        <div className="container-shell"><div className="max-w-2xl"><p className="section-kicker !text-[#80dfce]">Mudah dan jelas</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Dari cucian menumpuk jadi siap dipakai.</h2><p className="mt-4 leading-7 text-white/60">Alur layanan sederhana agar kamu tahu apa yang perlu dilakukan.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">{[{n:"01",t:"Hubungi kami",d:"Kirim pesan dan konsultasikan jenis cucian."},{n:"02",t:"Serahkan cucian",d:"Bawa cucian dan informasikan kondisi khusus."},{n:"03",t:"Proses laundry",d:"Cucian ditangani sesuai jenis bahan dan layanan."},{n:"04",t:"Selesai",d:"Kami kabari ketika cucian siap diambil."}].map((x,i)=><div key={x.n} className="rounded-2xl border border-white/10 bg-white/[.06] p-6"><p className="text-3xl font-black text-[#80dfce]">{x.n}</p><h3 className="mt-6 font-extrabold">{x.t}</h3><p className="mt-2 text-sm leading-6 text-white/60">{x.d}</p>{i!==3&&<div className="mt-6 hidden items-center gap-2 text-xs font-bold text-[#80dfce] md:flex">LANJUT <ArrowRight size={14}/></div>}</div>)}</div>
        </div>
      </section>

      <section className="container-shell py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">{[{icon:ShieldCheck,t:"Perhatian pada detail",d:"Jenis bahan dan kondisi cucian menjadi pertimbangan saat penanganan."},{icon:Clock3,t:"Informasi waktu jelas",d:"Layanan reguler kiloan memiliki estimasi pengerjaan 2 hari."},{icon:MessageCircle,t:"Mudah konsultasi",d:"Tanyakan harga, kondisi item, dan ketersediaan layanan lewat WhatsApp."}].map(x=><div key={x.t} className="flex gap-4 rounded-2xl border border-[#e4eeeb] bg-white p-6"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e6f8f4] text-[#0b9488]"><x.icon/></div><div><h3 className="font-extrabold">{x.t}</h3><p className="mt-2 text-sm leading-6 text-[#71858b]">{x.d}</p></div></div>)}</div>
      </section>

      <section id="kontak" className="bg-[#eaf6f2] py-20 md:py-24">
        <div className="container-shell grid gap-10 md:grid-cols-[1fr_.9fr]">
          <div><p className="section-kicker">Temukan kami</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Yuk, ngobrol dengan HALLO LAUNDRY.</h2><p className="mt-4 max-w-lg leading-7 text-[#6b8085]">Ada pertanyaan soal layanan, harga, atau perawatan item khusus? Hubungi kami sebelum datang.</p><a href={`https://wa.me/${WA}`} className="btn-main mt-7"><MessageCircle size={18}/> Chat WhatsApp</a></div>
          <div className="rounded-[26px] border border-[#dcebe5] bg-white p-7 soft-shadow"><div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e6f8f4] text-[#0b9488]"><MapPin/></div><div><p className="text-xs font-bold uppercase tracking-wider text-[#829397]">Alamat</p><p className="mt-1 font-extrabold">Botania 1, Batam</p></div></div><p className="mt-4 leading-7 text-[#61787d]">Perumahan Bukit Raya Blok C7 No. 15, Botania 1, Batam, Kepulauan Riau.</p><div className="my-6 h-px bg-[#e8efec]"/><div className="grid gap-4 sm:grid-cols-2"><a href={`https://wa.me/${WA}`} className="flex items-center gap-3 text-sm font-bold"><MessageCircle className="text-[#0b9488]"/> 0857-6536-3475</a><a href="https://www.instagram.com/hallolaundry.batam/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-bold"><Instagram className="text-[#0b9488]"/> @hallolaundry.batam</a><a href="https://www.threads.net/@hallolaundry.batam" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-bold"><AtSignFallback/> Threads</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-bold"><Facebook className="text-[#0b9488]"/> Hallo Laundry</a></div></div>
        </div>
      </section>

      <footer className="bg-[#0c2730] py-9 text-white">
        <div className="container-shell flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><p className="text-lg font-black">HALLO <span className="text-[#80dfce]">LAUNDRY</span></p><p className="mt-1 text-xs tracking-wider text-white/50">BERSIH • WANGI • RAPI</p></div><p className="text-xs text-white/50">© {new Date().getFullYear()} HALLO LAUNDRY. Semua hak dilindungi.</p><a href="#beranda" className="text-sm font-bold text-[#80dfce]">Kembali ke atas ↑</a></div>
      </footer>
      <a href={`https://wa.me/${WA}`} aria-label="Chat WhatsApp" className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#20b96e] text-white shadow-xl shadow-green-900/20 transition hover:scale-105"><MessageCircle size={25}/></a>
    </main>
  );
}

function AtSignFallback() {
  return <span className="grid h-5 w-5 place-items-center rounded-full bg-[#0b9488] text-[10px] font-black text-white">@</span>;
}
