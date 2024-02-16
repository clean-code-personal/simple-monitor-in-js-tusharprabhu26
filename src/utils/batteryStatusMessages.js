function getStatusMessage(statusMessage, language) {
  if (statusMessage !== "") return statusMessage;
  const messages = {
    en: "All parameters are within range.",
    de: "Alle Parameter sind im Rahmen.",
    ar: "جميع المعلمات ضمن النطاق.",
    ms: "Semua parameter berada dalam julat.",
  };
  return messages[language];
}

module.exports = { getStatusMessage };
