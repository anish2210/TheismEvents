import Image from 'next/image';

// col/row: CSS grid-column / grid-row shorthand (start / end)
const photos = [
  { src: '/artists/perf-7.jpg',  col: '1 / 3', row: '1 / 3' }, // hero — Tomay Poreche Mone ft. Bappi Lahiri
  { src: '/artists/perf-10.jpg', col: '3 / 5', row: '1 / 2' }, // three singers on stage
  { src: '/artists/perf-4.jpg',  col: '3 / 4', row: '2 / 3' }, // pink singer close-up
  { src: '/artists/perf-3.jpg',  col: '4 / 5', row: '2 / 3' }, // red saree performer
  { src: '/artists/perf-1.jpg',  col: '1 / 3', row: '3 / 4' }, // two men with stage smoke
  { src: '/artists/perf-6.jpg',  col: '3 / 5', row: '3 / 4' }, // band with lead singer
  { src: '/artists/perf-11.jpg', col: '1 / 4', row: '4 / 5' }, // full cast group on stage
  { src: '/artists/perf-9.jpg',  col: '4 / 5', row: '4 / 5' }, // duo performing close
  { src: '/artists/perf-2.jpg',  col: '1 / 3', row: '5 / 6' }, // male + female performers
  { src: '/artists/perf-5.jpg',  col: '3 / 5', row: '5 / 6' }, // confetti crowd moment
  { src: '/artists/perf-8.jpg',  col: '1 / 5', row: '6 / 7' }, // full-width press conf group
];

export default function StarsCollage() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.35em] mb-3">Our Artists</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Stars We <span className="text-red-600">Worked With</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-4 gap-3"
          style={{ gridAutoRows: '260px' }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
              style={{ gridColumn: photo.col, gridRow: photo.row }}
            >
              <Image
                src={photo.src}
                alt="Performance"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
