var dictionary = {
        'translate': 
		{
            'na': 'Switch to JP terms',
            'jp': 'Switch to NA terms',
        },
		'partisan': 
		{
            'na': 'Partisan',
            'jp': 'Partizan',
        },
		'Cleaving Scythe': 
		{
            'na': 'Cleaving Scythe',
            'jp': 'Scythe Ripper (サイズリッパー)',
        },
		'Thrusting Javelin': 
		{
            'na': 'Thrusting Javelin',
            'jp': 'Stab Javelin (スタッブジャベリン)',
        },
		'Fatal Tornado': 
		{
            'na': 'Fatal Tornado',
            'jp': 'Fatal Tornado (フェイタルトルネード)',
        },
		'Triumphant Shift': 
		{
            'na': 'Triumphant Shift',
            'jp': 'Triumphant Shift',
        }
};
var langs = ['na', 'jp'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function() {
    current_lang_index = ++current_lang_index % 2;
    current_lang = langs[current_lang_index];
    translate();
}

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
}

translate();

