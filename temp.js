var pMsg = {
  dic: {
    'init': [
      {
        'img': null,
        'txt': 'ある日、気がついたら\n近所に竜王の城が建っていました。',
        'btn': [{ 'txt': '次へ', 'evt': 'init' }],
      },
      {
        'img': null,
        'txt': 'どのくらい近いかというと',
        'btn': [{ 'txt': '次へ', 'evt': 'init' }],
      },
      {
        'img': 'img/ladatom.png',
        'txt': 'このくらい\n（結構近いよコレ）',
        'btn': [{ 'txt': '次へ', 'evt': 'init' }],
      },
      {
        'img': null,
        'txt': '城や町の外では、\n魔物も闊歩するようになりまして、\n甚だ遺憾です。',
        'btn': [{ 'txt': '次へ', 'evt': 'init' }],
      },
      {
        'img': null,
        'txt': '王国では防衛費を増やし、\n武器や防具、兵士を揃え、\n住民の警備を徹底しています。',
        'btn': [{ 'txt': '次へ', 'evt': 'init' }],
      },
      {
        'img': null,
        'txt': 'また、竜王暗殺に向けた少数精鋭の\n勇者と呼ばれる兵士を\n公募とか育成中とかいう噂も。',
        'btn': [{ 'txt': '次へ', 'evt': 'init' }],
      },
      {
        'img': null,
        'txt': 'そんななか私は、\n街路の警備の取り決めのため、\n近隣の市区町村と協議に出張し、\n帰ってくるところだったのですが...',
        'btn': [{ 'txt': '次へ', 'evt': 'init' }],
      },
    ],

    'init.bk': [
      {
        'img': 'img/ladatom.png',
        'txt': 'とととと',
        'btn': [
          { 'txt': '押忍', 'evt': 'init' },
          { 'txt': 'xxxx', 'evt': 'init2' },
          ],
    },
      {
        'img': null,
        'txt': 'けけけけけ',
        'btn': [
          { 'txt': 'お酢', 'evt': null }
          ],
    }
    ],
  },
  cnt: 0,
  crtkey: '',
  crtdic: '',
  get: function(key) {
    if (key == null)
    {
      this.cnt = 0
      this.crtdic = null
    }
    else if (this.crtkey != key)
    {
      this.cnt = 0
      if (this.dic[key])
      {
        this.crtdic = this.dic[key][this.cnt]
      }
      else {
        this.crtdic = null
      }
    }
    else if (this.dic[key].length > this.cnt + 1)
    {
      this.cnt++
      this.crtdic = this.dic[key][this.cnt]
    }
    else
    {
      this.cnt = 0
      this.crtdic = null
    }
    this.crtkey = key
    return this.crtdic
  },
};

var pTemp = {
  crt : {
    word : 'back00',
    term : [
      {
        id:1,
        type:'副詞',
        mean:'うしろに'
      },
      {
        id:2,
        type: '副詞',
        mean: '戻す'
      },
      ]
  },
  
}

export default pTemp;