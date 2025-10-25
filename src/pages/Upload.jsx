import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setPrediction("");
  };

  const handlePredict = async () => {
    if (!file) return alert("Please upload a file first!");
    setLoading(true);

    // Simulate API delay for demo
    setTimeout(() => {
      // Dummy prediction
      const fakeResult = Math.random() > 0.5 ? "Real" : "Deepfake";
      setPrediction(`Prediction: ${fakeResult}`);
      setLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setPrediction("");
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Upload Image / Video</h1>

      <div className="relative w-full max-w-lg">
        <label className="w-full p-10 border-4 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer 
        bg-gradient-to-br from-purple-200 via-pink-200 to-green-200 shadow-lg hover:scale-105 transition-transform duration-300 relative">
          {preview ? (
            file.type.startsWith("video") ? (
              <video src={preview} controls className="max-h-64 rounded-lg shadow-lg" />
            ) : (
              <img src={preview} alt="preview" className="max-h-64 rounded-lg shadow-lg" />
            )
          ) : (
            <>
              <p className="text-gray-500 mb-2">Drag & drop your file here</p>
              <p className="text-gray-500 text-sm">(or click to select)</p>
            </>
          )}
          <input
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Pulsing scan animation */}
          {preview && loading && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 border-4 border-pink-500 rounded-full animate-pulseScan"></div>
            </div>
          )}
        </label>

        {/* Optional scanning progress bar */}
        {loading && (
          <div className="w-full h-2 bg-gray-300 rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-pink-500 animate-[progress_2s_linear_infinite]"></div>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button
          onClick={handlePredict}
          className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Detecting..." : "Predict"}
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
        >
          Reset
        </button>
      </div>

      {/* Prediction box with glitch + fadeIn */}
      {prediction && (
        <div className="mt-6 p-4 bg-white/80 backdrop-blur-md shadow-lg rounded-lg w-full max-w-lg text-center text-gray-800 font-semibold animate-fadeIn glitch">
          {prediction}
        </div>
      )}
    </div>
  );
}
