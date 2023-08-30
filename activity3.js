const dropArea = document.querySelector('#drop-area');
const fileInput = document.querySelector('#file-input');
const downloadContainer = document.querySelector('#download-container');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
  dropArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
});

// Highlight drop area when a file is dragged over it
['dragenter', 'dragover'].forEach((eventName) => {
  dropArea.addEventListener(eventName, () => {
    dropArea.classList.add('dragover');
  });
});

// Remove highlight when a file is not being dragged over the drop area
['dragleave', 'drop'].forEach((eventName) => {
  dropArea.addEventListener(eventName, () => {
    dropArea.classList.remove('dragover');
  });
});

// Handle dropped files
dropArea.addEventListener('drop', (e) => {
  const file = e.dataTransfer.files[0];
  handleFile(file);
});

// Handle selected files
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  handleFile(file);
});

// Handle the selected or dropped file
function handleFile(file) {
  // Read the contents of the file as an ArrayBuffer
  const reader = new FileReader();
  reader.onload = () => {
    const arrayBuffer = reader.result;

    // Create a Uint8Array from the ArrayBuffer
    const uint8Array = new Uint8Array(arrayBuffer);

    // Create a DataView from the ArrayBuffer
    const dataView = new DataView(arrayBuffer);

    // Create a Blob from the Uint8Array
    const blob = new Blob([uint8Array]);

    // Create a File from the Blob and the file name
    const binaryFile = new File([blob], file.name, { type: file.type });

    const link = document.createElement('b');

    var lastModificationDate = document.lastModified;
    
    //link.textContent = "Last modified:"+  document.lastModified + "   ";
    
    link.textContent = `Last modified: ${file.lastModified}` + "  ";
    
    link.href = URL.createObjectURL(file);
    
    link.download = binaryFile.name;
    
    downloadContainer.appendChild(link);

    // Add a download link to the webpage
    const downloadLink = document.createElement('a');
    downloadLink.textContent = 'Download Binary File';
    downloadLink.href = URL.createObjectURL(binaryFile);
    downloadLink.download = binaryFile.name;
    downloadContainer.appendChild(downloadLink);
  };

  reader.readAsArrayBuffer(file);

}

