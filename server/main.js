import { Meteor } from 'meteor/meteor';
import Polls from '../imports/api/polls/server/publications';
import EventsMethods from '../imports/api/events/methods';

import PollsSeed from '../imports/api/polls/server/publications_seeds';
import UsersSeeds from '../imports/api/users/server/publications_seeds';

import UserConfig from '../imports/api/users/server/config';

Meteor.startup(() => {
  PollsSeed();
  UsersSeeds();
});

Polls();
