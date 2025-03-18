export const uploadCertificate = (studentId, file) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true, studentId, fileName: file.name }), 1000);
  });
};
