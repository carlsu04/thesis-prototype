import { useState } from "react";
import Navbar from "../components/navbar";

export default function Analysis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleFile(file) {
    if (!file) return;

    const isSupported = ["image/jpeg", "image/png"].includes(file.type);
    const isWithinSizeLimit = file.size <= 5 * 1024 * 1024;

    if (isSupported && isWithinSizeLimit) {
      setSelectedFile(file);
    }
  }

  function handleFileChange(event) {
    handleFile(event.target.files?.[0]);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    handleFile(event.dataTransfer.files[0]);
  }

  return (
    <div className="min-h-full flex-1 bg-blue-100 text-stone-900">
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1202px] flex-col px-6 pb-16 pt-12 sm:px-10 lg:pt-14">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Analyze your Nail
          </h1>

          <p className="mt-2 text-lg font-light text-black">
            Upload a clear photo of your nail.
          </p>
        </div>

        <section className="rounded-[20px] bg-white p-7 shadow-sm sm:p-8">
          <div
            onDragEnter={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`flex min-h-[500px] flex-col items-center justify-center rounded-[20px] border border-neutral-400 px-6 text-center transition-colors ${
              isDragging ? "bg-sky-200" : "bg-blue-100"
            }`}
          >
            <div className="flex max-w-md flex-col items-center">
              <div
                className="mb-7 flex h-20 w-20 items-center justify-center text-6xl leading-none text-black"
                aria-hidden="true"
              >
                ⇧
              </div>

              <p className="text-xl font-semibold text-black">
                Drag and drop your image here
              </p>

              <p className="my-8 text-xl font-light text-black">
                or
              </p>

              <label className="flex h-16 w-56 cursor-pointer items-center justify-center rounded-xl bg-sky-400 text-xl font-bold text-white transition-colors hover:bg-sky-500">
                Browse Files

                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>

              <p className="mt-8 text-base text-black/70">
                {selectedFile
                  ? `Selected: ${selectedFile.name}`
                  : "Supported Formats: JPG, PNG, | Max Size: 5MB"}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}