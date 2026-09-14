import Image from 'next/image';

export default function Dado({ valor }) {
  if (!valor) {
    return (
      <div
        aria-label="Dado ainda não lançado"
        className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-100 text-3xl font-bold text-gray-400"
      >
        ?
      </div>
    );
  }

  return (
    <Image
      src={`/${valor}.png`}
      alt={`Dado mostrando o número ${valor}`}
      width={64}
      height={64}
      className="h-16 w-16 rounded-lg"
    />
  );
}