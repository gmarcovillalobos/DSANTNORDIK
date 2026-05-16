import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Gauge,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Timer,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Renta inmediata',
    copy: 'Equipos listos para entrar a operación sin frenar tu almacén, obra o planta.',
  },
  {
    icon: Factory,
    title: 'Venta de equipos',
    copy: 'Montacargas eléctricos, gas/gasolina y diésel para cargas industriales exigentes.',
  },
  {
    icon: Wrench,
    title: 'Servicio técnico',
    copy: 'Mantenimiento preventivo, correctivo y soporte especializado para máxima continuidad.',
  },
]

const fleet = [
  'Montacargas eléctricos',
  'Montacargas gas / gasolina',
  'Montacargas diésel',
  'Minicargadores',
  'Retroexcavadoras',
  'Refacciones y soporte',
]

const stats = [
  { value: '24/7', label: 'Respuesta operativa' },
  { value: 'MX', label: 'Cobertura nacional' },
  { value: '3', label: 'Energías disponibles' },
  { value: '100%', label: 'Enfoque industrial' },
]

function GlowOrb({ className }) {
  return <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />
}

function ForkliftVisual() {
  return (
    <div className="relative mx-auto aspect-[1.18/1] w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,.18),transparent_34%),linear-gradient(145deg,#111,#030303_60%,#000)] shadow-2xl shadow-yellow-500/10">
      <GlowOrb className="right-8 top-8 h-48 w-48 bg-yellow-400/20" />
      <GlowOrb className="bottom-4 left-0 h-56 w-56 bg-orange-500/10" />

      <div className="absolute inset-x-8 top-8 flex items-center justify-between text-xs uppercase tracking-[.35em] text-white/35">
        <span>DSANT</span>
        <span>Industrial Grade</span>
      </div>

      <div className="absolute bottom-16 left-10 right-10 h-1 rounded-full bg-white/10" />

      <motion.div
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute bottom-[5.7rem] left-[4.8rem] h-28 w-56 rounded-[1.4rem] bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-600 shadow-2xl shadow-yellow-500/20"
      >
        <div className="absolute left-6 top-5 h-16 w-20 rounded-2xl border-4 border-black/50 bg-black/30 backdrop-blur" />
        <div className="absolute right-8 top-4 h-6 w-20 rounded-full bg-black/25" />
        <div className="absolute bottom-5 right-7 h-5 w-28 rounded-full bg-black/40" />
      </motion.div>

      <div className="absolute bottom-[5.4rem] left-[18rem] h-44 w-3 rounded-full bg-zinc-300/90 shadow-xl" />
      <div className="absolute bottom-[5.4rem] left-[19.2rem] h-44 w-2 rounded-full bg-zinc-500/90" />
      <div className="absolute bottom-[6.3rem] left-[20rem] h-2 w-40 rounded-full bg-zinc-300/95" />
      <div className="absolute bottom-[4.9rem] left-[20rem] h-2 w-44 rounded-full bg-zinc-500" />

      <div className="absolute bottom-[4.35rem] left-[5.7rem] h-14 w-14 rounded-full border-[10px] border-zinc-950 bg-zinc-800 shadow-inner" />
      <div className="absolute bottom-[4.35rem] left-[16.5rem] h-14 w-14 rounded-full border-[10px] border-zinc-950 bg-zinc-800 shadow-inner" />

      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
        {[
          ['Lift', '3.5T'],
          ['Power', 'Diesel'],
          ['Ready', 'Now'],
        ].map(([a, b]) => (
          <div key={a} className="rounded-2xl border border-white/10 bg-white/[.04] p-3 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[.25em] text-white/35">{a}</p>
            <p className="mt-1 text-sm font-semibold text-white">{b}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white selection:bg-yellow-400 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(250,204,21,.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.08),transparent_25%),linear-gradient(180deg,#000,#050505_45%,#000)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400 text-sm font-black text-black shadow-lg shadow-yellow-500/20">D</div>
            <div>
              <p className="text-sm font-semibold tracking-[.22em]">DSANT</p>
              <p className="text-xs text-white/45">Montacargas Lonking</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a href="#soluciones" className="transition hover:text-white">Soluciones</a>
            <a href="#flotilla" className="transition hover:text-white">Flotilla</a>
            <a href="#servicio" className="transition hover:text-white">Servicio</a>
            <a href="#contacto" className="transition hover:text-white">Contacto</a>
          </div>

          <a href="tel:+523332556484" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300">
            Cotizar
          </a>
        </nav>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.02fr_.98fr] md:px-8 md:pb-28 md:pt-24">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-sm text-yellow-200">
            <Zap className="h-4 w-4" /> Equipos industriales listos para trabajar
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.8 }} className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-.06em] text-white md:text-7xl lg:text-8xl">
            Potencia que mueve tu operación.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.8 }} className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Renta, venta y servicio técnico especializado de montacargas para almacenes, constructoras, plantas industriales y operaciones que no pueden detenerse.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.8 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/523332556484?text=Hola%20DSANT%2C%20quiero%20cotizar%20un%20montacargas" className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-semibold text-black shadow-2xl shadow-yellow-500/20 transition hover:bg-yellow-300">
              Cotizar por WhatsApp <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#flotilla" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              Ver soluciones
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[.035] p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-xs text-white/45">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <ForkliftVisual />
      </section>

      <section id="soluciones" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.35em] text-yellow-300/80">Soluciones DSANT</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] md:text-6xl">Menos paros. Más carga movida.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">Una experiencia más limpia, directa y premium para vender confianza desde el primer scroll.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, copy }) => (
            <motion.article key={title} whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/[.035] p-7 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="grid h-13 w-13 place-items-center rounded-2xl bg-yellow-400/10 text-yellow-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="flotilla" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))] p-6 backdrop-blur-xl md:grid-cols-[.9fr_1.1fr] md:p-10">
          <div className="rounded-[2rem] bg-black/50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[.35em] text-yellow-300/80">Flotilla</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] md:text-5xl">El equipo correcto para cada carga.</h2>
            <p className="mt-5 leading-8 text-zinc-400">Desde maniobras en interiores hasta trabajo pesado en exterior. DSANT debe verse como una marca que resuelve, no como un catálogo genérico de maquinaria.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {fleet.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 p-4">
                <CheckCircle2 className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicio" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [ShieldCheck, 'Confianza industrial', 'Imagen sólida para clientes que toman decisiones grandes y necesitan certeza.'],
            [Timer, 'Respuesta rápida', 'CTA directo, mensajes claros y orientación a cotización inmediata.'],
            [Gauge, 'Rendimiento visual', 'Diseño ligero, responsive y con jerarquía comercial fuerte.'],
          ].map(([Icon, title, copy]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-black p-7">
              <Icon className="h-7 w-7 text-yellow-300" />
              <h3 className="mt-7 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-yellow-300/20 bg-yellow-400 p-8 text-black md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[.25em] text-black/55">
                <Star className="h-4 w-4" /> Cotización rápida
              </div>
              <h2 className="text-4xl font-semibold tracking-[-.05em] md:text-6xl">Tu operación necesita moverse hoy.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">Haz que el sitio cierre más prospectos: WhatsApp visible, propuesta clara y servicios ordenados sin ruido visual.</p>
            </div>
            <a href="tel:+523332556484" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-zinc-900">
              <Phone className="h-4 w-4" /> Llamar ahora
            </a>
          </div>
        </div>
      </section>

      <footer id="contacto" className="border-t border-white/10 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold tracking-[.22em] text-white">DSANT MONTACARGAS</p>
            <p className="mt-2">Renta, venta y servicio técnico especializado.</p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-yellow-300" /> 33 3255 6484</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-yellow-300" /> Guadalajara · Cobertura nacional</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
