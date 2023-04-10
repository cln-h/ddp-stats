import _ from 'lodash';
import { DiscordDataPackage, GenericObject } from '../../types';

/**
 * Count the total number of direct messages sent via direct messag
 * @param dataPackage Populated discord data package
 * @param userId userID of the target user
 * @returns
 */
export const countDirectMessages = (dataPackage: DiscordDataPackage) => {
  let count = 0;
  Object.keys(dataPackage.messages).forEach(messageRecord => {
    // Get message stream from message record
    const channel = _.get(dataPackage, `messages.${messageRecord}.channel`);
    if (channel.type === 1) {
      const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
      count += messages.length;
    }
  });
  return count;
};

export const countDirectMessagesByUser = (
  dataPackage: DiscordDataPackage,
  targetUserId: string,
) => {
  Object.keys(dataPackage.messages).forEach(messageRecord => {
    const channel = _.get(dataPackage, `messages.${messageRecord}.channel`);
    if (channel.type === 1) {
      if (channel.recipients && channel.recipients.includes(targetUserId)) {
        return _.get(dataPackage, `messages.${messageRecord}.messages`).length;
      }
    }
  });
};

export const countGuildMessages = (dataPackage: DiscordDataPackage) => {
  let count = 0;
  Object.keys(dataPackage.messages).forEach(messageRecord => {
    const channel = _.get(dataPackage, `messages.${messageRecord}.channel`);
    if (channel.type == 0) {
      // TODO: Ensure type is 0
      const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
      count += messages.length;
    }
  });
  return count;
};

export const countTotalMessages = (dataPackage: DiscordDataPackage) => {
  let count = 0;
  Object.keys(dataPackage.messages).forEach(messageRecord => {
    const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
    count += messages.length;
  });
  return count;
};

/**
 * Counts total messages using events instead of saved messages
 * @param dataPackage 
 */
export const countMessagesSent = (dataPackage: DiscordDataPackage) => {
  countEvents(dataPackage, "messageSent");
}

export const countCharactersSent = (dataPackage: DiscordDataPackage) => {
  let count = 0;
  Object.keys(dataPackage.messages).forEach(messageRecord => {
    const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
    count = messages.reduce((acc, msg) => {
      return (acc += msg.Contents.length);
    }, 0);
  });
  return count;
};

/** Retrieve two words sent most often. Remove transition words like `and` and `the` */
export const getFavoriteWord = (dataPackage: DiscordDataPackage) => {
  const wordCount: GenericObject = {};
  Object.keys(dataPackage.messages).forEach(messageRecord => {
    const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
    messages.forEach(message => {
      const words = message.Contents.split(' ');
      words.forEach(word => {
        if (wordCount[word]) {
          wordCount[word] += 1;
        } else {
          wordCount[word] = 1;
        }
      });
    });
  });
  return Object.keys(wordCount).reduce((a, b) =>
    wordCount[a] > wordCount[b] ? a : b,
  );
};

/**
 * Find the user that the client has sent the most messages to
 */
export const getFavoriteUser = (dataPackage: DiscordDataPackage) => {
  // TODO: This is a duplicate of countDirectMessagesByUser - refactor to use that function
  // TODO: Also, ensure this works
  const userCount: GenericObject = {};
  Object.keys(dataPackage.messages).forEach(messageRecord => {
    const channel = _.get(dataPackage, `messages.${messageRecord}.channel`);
    if (channel.type === 1) {
      const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
      const userId = _.get(dataPackage, `messages.${messageRecord}.channel.id`);
      userCount[userId] = messages.length;
    }
  });
  return Object.keys(userCount).reduce((a, b) =>
    userCount[a] > userCount[b] ? a : b,
  );
};

export const countTimesClientOpened = (dataPackage: DiscordDataPackage) => {
  let counter = 0;

  Object.entries(dataPackage.activity.analytics).forEach(([key, value]) => {
    for (const event of value.events) {
      if (event.event_type === "appOpened") counter++;
    }
  });

  return counter;
};

export const countNotificationsTouched = (dataPackage: DiscordDataPackage) => {};

export const getTotalSpent = (dataPackage: DiscordDataPackage) => {};

export const countVoiceChannelsJoined = (dataPackage: DiscordDataPackage) => {};

export const countAcceptedCalls = (dataPackage: DiscordDataPackage) => {};

export const countOutgoingCalls = (dataPackage: DiscordDataPackage) => {};

export const countReactionsAdded = (dataPackage: DiscordDataPackage) => {};

export const countTimesMentioned = (dataPackage: DiscordDataPackage) => {};

export const countGuildsJoined = (dataPackage: DiscordDataPackage) => {};

export const getMostUsedEmoji = (dataPackage: DiscordDataPackage) => {};

export const countEvents = (dataPackage: DiscordDataPackage, eventName: string) => {
  let counter = 0;

  Object.entries(dataPackage.activity.analytics).forEach(([key, value]) => {
    for (const event of value.events) {
      if (event.event_type === eventName) counter++;
    }
  });

  return counter;
};
