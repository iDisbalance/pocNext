import { SCREEN_NAMES, SCREEN_PARAMS_NAMES } from '@sportingsolutions/routing'

export const FIXED_ODDS_SCREEN_TYPES = {
  [SCREEN_NAMES.ODDS_HOME]: {
    matcher: '',
  },
  [SCREEN_NAMES.ODDS_IN_PLAY]: {
    matcher: 'in-play',
  },
  [SCREEN_NAMES.ODDS_PATH]: {
    matcher: 'path',
    paramType: SCREEN_PARAMS_NAMES.competitionId, 
  },
  [SCREEN_NAMES.ODDS_EVENT]: {
    matcher: 'event',
    paramType: SCREEN_PARAMS_NAMES.meetingId,
  },
  [SCREEN_NAMES.ODDS_HORSE_RACING]: {
    matcher: 'horse-racing',
    paramType: SCREEN_PARAMS_NAMES.meetingId,
  },
  [SCREEN_NAMES.ODDS_DOG_RACING]: {
    matcher: 'greyhound-racing',
    paramType: SCREEN_PARAMS_NAMES.meetingId,
  },
}
