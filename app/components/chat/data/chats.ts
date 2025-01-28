import type { Message } from 'ai'

export interface Chat {
  id: string
  date: string
  title: string
  messages: Message[]
}

export const chats: Chat[] = [
  {
    id: 'b7398a48-980f-4b84-b9db-f31b15efc96e',
    date: '2023-10-01T09:00:00',
    title: 'Singing Hamster in Basement',
    messages: [
      {
        id: '1',
        role: 'system',
        content: 'You are a silly but helpful assistant, always providing friendly and creative ideas.',
      },
      {
        id: '2',
        role: 'user',
        content:
          'I found a hamster in my basement that sings old show tunes. It\'s wearing a tiny hat, and I\'m not sure what to do with it. Any advice?',
      },
      {
        id: '3',
        role: 'assistant',
        content:
          'Wow, that\'s a unique roommate! First, make sure it\'s comfortable. Provide a soft box, fresh water, and hamster-friendly snacks. Also, keep a small stage handy in case it wants to perform again.',
      },
      {
        id: '4',
        role: 'user',
        content:
          'It seems happy but I\'m worried about its diet. Should I feed it seeds, cheese, or something else?',
      },
      {
        id: '5',
        role: 'assistant',
        content:
          'Hamsters usually thrive on seeds or pellets specifically made for them. Cheese can be a rare treat, but don\'t overdo it. Keep your little singer healthy, and it can keep belting out show tunes for you!',
      },
    ],
  },
  {
    id: 'd53f9ea2-cf56-42e4-abd5-70118c92d842',
    date: '2023-10-03T10:30:00',
    title: 'Ticket Idea for Hamster Show',
    messages: [
      {
        id: '6',
        role: 'user',
        content:
          'It\'s been two days, and now the singing hamster is performing nightly concerts in my basement. My neighbors are curious. Should I charge tickets for these shows?',
      },
      {
        id: '7',
        role: 'assistant',
        content:
          'Charging tickets might be a fun idea! You could set up a miniature box office and chairs. Just make sure your neighbors don\'t mind the occasional late-night crooning.',
      },
      {
        id: '8',
        role: 'user',
        content:
          'I’m thinking about adding a small cover charge, like a few dollars per seat. But I\'m worried about taxes or permits.',
      },
      {
        id: '9',
        role: 'assistant',
        content:
          'Good point. It\'s wise to check your local regulations. A small donation jar might be simpler. Keep it lighthearted and see if the audience enjoys the show enough to chip in!',
      },
      {
        id: '10',
        role: 'user',
        content: 'Alright, a donation jar it is. Thanks!',
      },
      {
        id: '11',
        role: 'assistant',
        content:
          'You\'re welcome! Hope your hamster star enjoys its new fan club. Break a leg—figuratively, of course!',
      },
    ],
  },
  {
    id: 'b97cf6ea-2f8e-47c8-900b-245d16f94b1c',
    date: '2023-10-05T14:15:00',
    title: 'Rodent Choreography Tips',
    messages: [
      {
        id: '12',
        role: 'system',
        content: 'You are a witty mentor on rodent showbiz.',
      },
      {
        id: '13',
        role: 'user',
        content:
          'The hamster now insists on backup dancers. This rodent extravaganza is getting out of hand. Any tips for hamster choreography?',
      },
      {
        id: '14',
        role: 'assistant',
        content:
          'Sure! Tiny top hats, simple steps, and small props like mini canes or feather boas can do wonders. Keep the rhythm slow so the little dancers can follow along.',
      },
      {
        id: '15',
        role: 'user',
        content:
          'That sounds fun. I\'m worried about them tripping on costumes, though. Should I skip the hats?',
      },
      {
        id: '16',
        role: 'assistant',
        content:
          'A comfortable hamster is a happy performer. If they\'re fussing with hats, go with something simpler—maybe ribbons around their waists. Safety first, glamour second!',
      },
      {
        id: '17',
        role: 'assistant',
        content:
          'Also, remember to reward them with small treats after each rehearsal. Performers love to feel appreciated!',
      },
    ],
  },
  {
    id: 'cf6916c5-2c4b-4d53-abc5-96fb51d0f6c3',
    date: '2023-10-08T17:45:00',
    title: 'Talent Agent Calls',
    messages: [
      {
        id: '18',
        role: 'user',
        content:
          'A talent agent reached out about the hamster\'s act. They\'re talking TV appearances, but I\'m nervous. How do I handle this situation?',
      },
      {
        id: '19',
        role: 'assistant',
        content:
          'Take a deep breath! Ask about details like scheduling, potential earnings, and who covers any travel. Keep your hamster\'s comfort in mind. Showbiz can be stressful, even for a tiny star.',
      },
      {
        id: '20',
        role: 'user',
        content:
          'Great points. Should I ask for a contract, or is that too formal for a hamster gig?',
      },
      {
        id: '21',
        role: 'assistant',
        content:
          'Contracts can help avoid misunderstandings. Even a simple agreement stating performance times and compensation works wonders. Better safe than sorry!',
      },
    ],
  },
  {
    id: 'a3d3d4bf-e5ca-4359-9086-2213c5d2aac1',
    date: '2023-10-10T20:00:00',
    title: 'Stage Fright Strikes',
    messages: [
      {
        id: '22',
        role: 'system',
        content: 'You are an encouraging assistant for unusual performance issues.',
      },
      {
        id: '23',
        role: 'user',
        content:
          'We did a live broadcast, but the hamster froze under the bright lights and didn\'t sing a single note. Now I\'m worried its confidence is gone!',
      },
      {
        id: '24',
        role: 'assistant',
        content:
          'Stage fright happens to the best of us—human or hamster. Try rehearsing under soft lights first. Give the hamster gentle encouragement, and maybe a quiet space to warm up before going live again.',
      },
      {
        id: '25',
        role: 'user',
        content:
          'I guess I\'ll set up a small spotlight instead of those glaring lights. Anything else that might help?',
      },
      {
        id: '26',
        role: 'assistant',
        content:
          'A calm environment and a familiar tune can work wonders. If your hamster has a favorite song, start with that. Build up confidence, and soon it\'ll be belting out show tunes again!',
      },
    ],
  },
  {
    id: '6484354f-15f2-49c0-8bef-9da8c859cd62',
    date: '2023-10-12T09:30:00',
    title: 'Off-Key Tap Dancing',
    messages: [
      {
        id: '27',
        role: 'user',
        content:
          'I tried feeding the hamster some fancy seeds for extra energy. Now it sings off-key and does wild tap dances. Is this normal?',
      },
      {
        id: '28',
        role: 'assistant',
        content:
          'It could be the excitement from new treats. Hamsters can get a burst of energy from richer seeds. Maybe scale back and stick to a steady diet. Off-key or not, it\'s definitely putting on a show!',
      },
      {
        id: '29',
        role: 'user',
        content:
          'It\'s quite entertaining, but I\'m worried about the neighbors complaining about the late-night tap routine.',
      },
      {
        id: '30',
        role: 'assistant',
        content:
          'In that case, consider scheduling performances during the day. If your hamster is a natural night owl, maybe some gentle hush time training could help. Keep the peace, but let the star shine!',
      },
    ],
  },
  {
    id: '2bf47646-2f07-48dd-bede-0dbb3d3348b1',
    date: '2023-10-15T19:00:00',
    title: 'Handling Hamster Diva Demands',
    messages: [
      {
        id: '31',
        role: 'user',
        content:
          'The hamster nailed a big performance recently, but now it\'s demanding a fancy dressing room with plush decor. How do I set boundaries?',
      },
      {
        id: '32',
        role: 'assistant',
        content:
          'A hamster with star power can get carried away. Provide a cozy spot with a soft cloth and maybe a tiny mirror. But remind it that you’re still in charge—no gold-plated cages!',
      },
      {
        id: '33',
        role: 'user',
        content:
          'I\'m definitely drawing the line at mini chandeliers. Should I at least get it a small vanity table?',
      },
      {
        id: '34',
        role: 'assistant',
        content:
          'A small wooden box with a mirror taped to it should work fine. It\'s all about balancing a bit of glamour with sensible limits. Your singing friend will adapt just fine!',
      },
      {
        id: '35',
        role: 'assistant',
        content:
          'Don\'t forget to show appreciation, though. A star that feels valued will keep the performances going—within reason!',
      },
    ],
  },
]
