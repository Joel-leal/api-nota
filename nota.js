const registration = document.getElementById("input-registration");
async function getRegistration(value) {
  const url = `http://192.168.0.11:8031/notas?m=${value}`;
  const res = await fetch(url);
  const data = await res.json();
  const outputNome = document.getElementById("nome");
  outputNome.innerHTML = data.data.nome;
  const outputTurma = document.getElementById("turma");
  outputTurma.innerHTML = data.data.serie;
  const outputArt = document.getElementById("art");
  outputArt.innerHTML = data.data.art;
  const outputCie = document.getElementById("cie");
  outputCie.innerHTML = data.data.cie;
  const outputedfis = document.getElementById("ed-fis");
  outputedfis.innerHTML = data.data.edFis;
  const outputGeo = document.getElementById("geo");
  outputGeo.innerHTML = data.data.geo;
  const outputHist = document.getElementById("hist");
  outputHist.innerHTML = data.data.hist;
  const outputEsp = document.getElementById("esp");
  outputEsp.innerHTML = data.data.esp;
  const outputIng = document.getElementById("eng");
  outputIng.innerHTML = data.data.eng;
  const outputPort = document.getElementById("port");
  outputPort.innerHTML = data.data.port;
  const outputMat2 = document.getElementById("mat2");
  outputMat2.innerHTML = data.data.mat2;
  const outputMat1 = document.getElementById("mat1");
  outputMat1.innerHTML = data.data.mat1;
  const outputRed = document.getElementById("red");
  outputRed.innerHTML = data.data.red;
}
registration.addEventListener("blur", () =>
  getRegistration(registration.value)
);
