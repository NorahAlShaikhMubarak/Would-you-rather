export const userQuestionData = {
  unanswered: [
    {
      qid: 2,
      author: 'Meme Ahmad',
      avatar: 'Meme.png',
      question: 'Eat sushi with your bestie'
    },
    {
      qid: 1,
      author: 'Khalid Hamad',
      avatar: 'Khalid.png',
      question: 'Visit a friend in a foreign country'
    },
    {
      qid: 5,
      author: 'Norah Saled',
      avatar: 'Norah.png',
      question: 'Be able to grant one wish'
    }
  ],
  answered: [
    {
      qid: 4,
      author: 'Huda Ahmad',
      avatar: 'Huda.png',
      question: 'Teach a dog to code'
    },
    {
      qid: 3,
      author: 'Maryam Khalid',
      avatar: 'Maryam.png',
      question: 'Run your own dev company'
    },
    {
      qid: 6,
      author: 'Jason Johm',
      avatar: 'Jason.png',
      question: 'Have a seamless MERN app deployment'
    }
  ]
};

export const questionData = {
  qid: 2,
  author: 'Ahmad mohammed',
  avatar: 'Ahmad.png',
  optionOne: {
    votes: ['jasonjohm', 'maryamkhalid'],
    text: 'Go out to dinner and the cinema.'
  },
  optionTwo: {
    votes: ['norahsaleh'],
    text: 'Netflix and chill.'
  }
};

export const leaderboardData = [
  {
    id: 'norahsaleh',
    name: 'Norah Saleh',
    avatar: 'Norah.png',
    answerCount: 11,
    questionCount: 4
  },
  {
    id: 'hudaahmad',
    name: 'Huda Ahmad',
    avatar: 'Huda.png',
    answerCount: 7,
    questionCount: 4
  },
  {
    id: 'khalidhamad',
    name: 'Khalid Hamad',
    avatar: 'Khalid.png',
    answerCount: 4,
    questionCount: 3
  }
];

export const navUsers = {
  jason: {
    id: 'jason',
    name: 'Jason',
    avatar: {
      name: 'jason',
      src: '/images/avatars/Jason.png'
    }
  },
  ahmad: {
    id: 'ahmad',
    name: 'Ahmad',
    avatar: {
      name: 'ahmad',
      src: '/images/avatars/Ahmad.png'
    }
  },
  norah: {
    id: 'norah',
    name: 'Norah',
    avatar: {
      name: 'norah',
      src: '/images/avatars/Norah.png'
    }
  },
  sarah: {
    id: 'sarah',
    name: 'Sarah',
    avatar: {
      name: 'sarah',
      src: '/images/avatars/Sarah.png'
    }
  },
  maryam: {
    id: 'maryam',
    name: 'Maryam',
    avatar: {
      name: 'maryam',
      src: '/images/avatars/Maryam.png'
    }
  },
  khalid: {
    id: 'khalid',
    name: 'Khalid',
    avatar: {
      name: 'khalid',
      src: '/images/avatars/Khalid.png'
    }
  },
  huda: {
    id: 'huda',
    name: 'Huda',
    avatar: {
      name: 'huda',
      src: '/images/avatars/Huda.png'
    }
  },
  saleh: {
    id: 'saleh',
    name: 'Saleh',
    avatar: {
      name: 'saleh',
      src: '/images/avatars/Saleh.png'
    }
  }
};

export const users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    // avatarURL: ,
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    // avatarURL: ,
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    // avatarURL: ,
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  }
};

// export default userQuestionData;