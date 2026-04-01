const fs = require('fs');

const file = 'src/lib/i18n.ts';
let content = fs.readFileSync(file, 'utf8');

const newKeys = {
  en: `    glassMode: "Glass Mode",
    editExam: "Edit Exam",
    deleteExam: "Delete Exam",
    changeName: "Change Name",
    changeDate: "Change Date",
    deleteConfirm: "Are you sure you want to delete this exam?",
    yesDelete: "Yes, Delete",
    cancel: "Cancel",
    guideAddExamDesc: "Click the '+' button to quickly add a new exam.",
    guideLongPressDesc: "Long press an exam card to edit or delete it.",
    guideGlassModeDesc: "Enable Glass Mode in settings for a premium frosted glass look.",`,
  hi: `    glassMode: "ग्लास मोड",
    editExam: "परीक्षा संपादित करें",
    deleteExam: "परीक्षा हटाएं",
    changeName: "नाम बदलें",
    changeDate: "तिथि बदलें",
    deleteConfirm: "क्या आप वाकई इस परीक्षा को हटाना चाहते हैं?",
    yesDelete: "हां, हटाएं",
    cancel: "रद्द करें",
    guideAddExamDesc: "नई परीक्षा जल्दी जोड़ने के लिए '+' बटन पर क्लिक करें।",
    guideLongPressDesc: "परीक्षा कार्ड को संपादित या हटाने के लिए देर तक दबाएं।",
    guideGlassModeDesc: "प्रीमियम फ्रॉस्टेड ग्लास लुक के लिए सेटिंग्स में ग्लास मोड सक्षम करें।",`,
  sa: `    glassMode: "काच-प्रकारः",
    editExam: "परीक्षाम् सम्पादयतु",
    deleteExam: "परीक्षाम् अपसारयतु",
    changeName: "नाम परिवर्तयतु",
    changeDate: "तिथिं परिवर्तयतु",
    deleteConfirm: "किं भवान् निश्चयेन इमां परीक्षाम् अपसारयितुम् इच्छति?",
    yesDelete: "आम्, अपसारयतु",
    cancel: "रद्द करोतु",
    guideAddExamDesc: "नूतनां परीक्षाम् शीघ्रं योजयितुं '+' बटनं नुदतु।",
    guideLongPressDesc: "परीक्षा-पत्रं सम्पादयितुं वा अपसारयितुं वा दीर्घकालं यावत् नुदतु।",
    guideGlassModeDesc: "उत्तम-काच-रूपाय सेटिंग्स-मध्ये काच-प्रकारं सक्षमं करोतु।",`,
  de: `    glassMode: "Glas-Modus",
    editExam: "Prüfung bearbeiten",
    deleteExam: "Prüfung löschen",
    changeName: "Name ändern",
    changeDate: "Datum ändern",
    deleteConfirm: "Möchten Sie diese Prüfung wirklich löschen?",
    yesDelete: "Ja, löschen",
    cancel: "Abbrechen",
    guideAddExamDesc: "Klicken Sie auf die Schaltfläche '+', um schnell eine neue Prüfung hinzuzufügen.",
    guideLongPressDesc: "Halten Sie eine Prüfungskarte gedrückt, um sie zu bearbeiten oder zu löschen.",
    guideGlassModeDesc: "Aktivieren Sie den Glas-Modus in den Einstellungen für einen Premium-Milchglas-Look.",`,
  ja: `    glassMode: "ガラスモード",
    editExam: "試験を編集",
    deleteExam: "試験を削除",
    changeName: "名前を変更",
    changeDate: "日付を変更",
    deleteConfirm: "この試験を削除してもよろしいですか？",
    yesDelete: "はい、削除します",
    cancel: "キャンセル",
    guideAddExamDesc: "「+」ボタンをクリックして、新しい試験をすばやく追加します。",
    guideLongPressDesc: "試験カードを長押しして編集または削除します。",
    guideGlassModeDesc: "設定でガラスモードを有効にすると、プレミアムなすりガラスの外観になります。",`,
  zh: `    glassMode: "玻璃模式",
    editExam: "编辑考试",
    deleteExam: "删除考试",
    changeName: "更改名称",
    changeDate: "更改日期",
    deleteConfirm: "您确定要删除此考试吗？",
    yesDelete: "是的，删除",
    cancel: "取消",
    guideAddExamDesc: "点击“+”按钮快速添加新考试。",
    guideLongPressDesc: "长按考试卡片进行编辑或删除。",
    guideGlassModeDesc: "在设置中启用玻璃模式，获得高级磨砂玻璃外观。",`,
  es: `    glassMode: "Modo Cristal",
    editExam: "Editar Examen",
    deleteExam: "Eliminar Examen",
    changeName: "Cambiar Nombre",
    changeDate: "Cambiar Fecha",
    deleteConfirm: "¿Estás seguro de que quieres eliminar este examen?",
    yesDelete: "Sí, Eliminar",
    cancel: "Cancelar",
    guideAddExamDesc: "Haz clic en el botón '+' para agregar rápidamente un nuevo examen.",
    guideLongPressDesc: "Mantén presionada una tarjeta de examen para editarla o eliminarla.",
    guideGlassModeDesc: "Habilita el Modo Cristal en la configuración para un aspecto premium de cristal esmerilado.",`,
  fr: `    glassMode: "Mode Verre",
    editExam: "Modifier l'examen",
    deleteExam: "Supprimer l'examen",
    changeName: "Changer le nom",
    changeDate: "Changer la date",
    deleteConfirm: "Êtes-vous sûr de vouloir supprimer cet examen ?",
    yesDelete: "Oui, supprimer",
    cancel: "Annuler",
    guideAddExamDesc: "Cliquez sur le bouton '+' pour ajouter rapidement un nouvel examen.",
    guideLongPressDesc: "Appuyez longuement sur une carte d'examen pour la modifier ou la supprimer.",
    guideGlassModeDesc: "Activez le Mode Verre dans les paramètres pour un aspect verre dépoli premium.",`,
  ru: `    glassMode: "Стеклянный режим",
    editExam: "Редактировать экзамен",
    deleteExam: "Удалить экзамен",
    changeName: "Изменить имя",
    changeDate: "Изменить дату",
    deleteConfirm: "Вы уверены, что хотите удалить этот экзамен?",
    yesDelete: "Да, удалить",
    cancel: "Отмена",
    guideAddExamDesc: "Нажмите кнопку '+', чтобы быстро добавить новый экзамен.",
    guideLongPressDesc: "Долгое нажатие на карточку экзамена позволяет редактировать или удалить ее.",
    guideGlassModeDesc: "Включите стеклянный режим в настройках для премиального вида матового стекла.",`,
  ko: `    glassMode: "유리 모드",
    editExam: "시험 편집",
    deleteExam: "시험 삭제",
    changeName: "이름 변경",
    changeDate: "날짜 변경",
    deleteConfirm: "이 시험을 삭제하시겠습니까?",
    yesDelete: "예, 삭제합니다",
    cancel: "취소",
    guideAddExamDesc: "'+' 버튼을 클릭하여 새 시험을 빠르게 추가하세요.",
    guideLongPressDesc: "시험 카드를 길게 눌러 편집하거나 삭제하세요.",
    guideGlassModeDesc: "설정에서 유리 모드를 활성화하여 프리미엄 반투명 유리 모양을 얻으세요.",`
};

const lines = content.split('\n');
const newLines = [];
let currentLang = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  newLines.push(line);
  
  const langMatch = line.match(/^\s+([a-zA-Z0-9_]+):\s*\{/);
  if (langMatch) {
    currentLang = langMatch[1];
  }
  
  // Insert before the closing brace of the language object
  if (line.match(/^\s+\},?$/) && currentLang && newKeys[currentLang]) {
    // We need to insert the new keys before this line.
    // Wait, let's just pop the closing brace, add a comma to the previous line if needed,
    // then push the new keys, then push the closing brace.
    newLines.pop(); // remove the closing brace
    
    // add comma to previous line if it doesn't have one
    const prevLine = newLines[newLines.length - 1];
    if (prevLine && !prevLine.endsWith(',') && !prevLine.endsWith('{')) {
      newLines[newLines.length - 1] = prevLine + ',';
    }
    
    newLines.push(newKeys[currentLang]);
    newLines.push(line); // push the closing brace back
    currentLang = ''; // reset
  }
}

fs.writeFileSync(file, newLines.join('\n'));
console.log('Done');
