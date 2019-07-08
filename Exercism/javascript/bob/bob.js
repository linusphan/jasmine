const hey = (message) => {
  message = message.replace(/\s/g, '');

  const replies = {
    neutral: 'Whatever.',
    query: 'Sure.',
    forcefulQuery: 'Calm down, I know what I\'m doing!',
    shout: 'Whoa, chill out!',
    blank: 'Fine. Be that way!',
  };

  let statement = 'neutral';

  if (message.toUpperCase() === message && /[A-Z]/.test(message)) {
    statement = 'shout';

    if (/[A-Z]+[?]$/.test(message)) { statement = 'forcefulQuery'; }
  } else if (/\?$/.test(message)) {
    statement = 'query';
  } else if (/\?$/.test(message)) {
    statement = 'query';
  } else if (!message) {
    statement = 'blank';
  }

  return replies[statement];
};

module.exports = hey;
