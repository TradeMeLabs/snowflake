#reads in the csv files and outputs the javascript needed to run the snowflake
#rubic
#
# Apache License 2019

import pandas as pd
import json
import random


#INGESTION
def read_tracks(df, category='A', start_col=1, start_row=6):
    track_count = int((len(df.columns) - 1) / 3)
    skip_count = 3
    tracks = []

    for i in range(track_count):
        colpos = start_col + (i * skip_count)
        track_name = df.iloc[start_row, colpos]
        track_description = df.iloc[start_row+1, colpos]
        milestones = []
        for mc in range(5):
            mrow_start = start_row + 2
            mpos = mrow_start + (mc * 5)
            msummary = df.iloc[mpos, colpos]
            examples = [df.iloc[mpos + 2 + f, colpos] for f in range(3)]
            signals = [df.iloc[mpos + 2 + f, colpos + 1] for f in range(3)]
            milestones.append({'summary':msummary, 'examples':examples, 'signals':signals})
        tracks.append({'displayName':track_name,
                'category':category,
                'description':track_description,
                'milestones':milestones})
        #break
    return tracks



#OUTPUT - CONSTANTS
def print_tracks_json(tracks):
    track_string = 'export const tracks: Tracks = {\n'
    counter = 0
    for track in tracks:
        track_string = track_string + '"' + (track['displayName'].replace(' ', '_').upper() + '" : ' + json.dumps(track, indent=1))
        counter = counter + 1
        if counter < len(tracks):
            track_string = track_string + '\n,\n'
    track_string = track_string + '}\n'
    return track_string


def print_track_names_json(tracks):
    track_string = 'export type Tracks = {\n'
    for track in tracks:
        track_string = track_string + '\'' + track['displayName'].replace(' ', '_').upper() + '\'' + ': ' + 'Track,\n'
    track_string = track_string[:-2] + '\n}'
    return track_string


def print_milestone_names_json(tracks):
    track_string = 'export type MilestoneMap = {\n'
    for track in tracks:
        track_string = track_string + '\'' + track['displayName'].replace(' ', '_').upper() + '\'' + ': ' + 'Milestone,\n'
    track_string = track_string[:-2] + '\n}'
    return track_string


def print_track_ids_json(tracks):
    track_string = 'export type TrackId = \n'
    for track in tracks:
        track_string = track_string + '\'' + track['displayName'].replace(' ', '_').upper() + '\'' + ' | '
    track_string = track_string[:-2] + '\n'
    return track_string


#SNOWFLAKEAPP METHODS
def print_empty_states_json(tracks):
    track_string = '''const emptyState = (): SnowflakeAppState => {
  return {
    name: "",
    title: "",
    milestoneByTrack: {\n'''
    for track in tracks:
        track_string = track_string + '\t\'' + track['displayName'].replace(' ', '_').upper() + '\'' + ': 0,\n'
    track_string = (track_string[:-2] + '},\n' + ' focusedTrackId: "{}"'.format(tracks[0]['displayName'].replace(' ', '_').upper())
    + '}\n}\n')
    return track_string

def print_default_states_json(tracks):
    random.seed(None)
    track_string = '''const defaultState = (): SnowflakeAppState => {
  return {
    name: "Cersei Lannister",
    title: "Analyst",
    milestoneByTrack: {\n'''
    for track in tracks:
        track_string = (track_string + '\t\'' + track['displayName'].replace(' ', '_').upper() + '\'' + ': '
        + str(random.randint(1,5)) + ',\n' )
    track_string = (track_string[:-2] + '},\n' + ' focusedTrackId: "{}"'.format(tracks[0]['displayName'].replace(' ', '_').upper())
    + '}\n}\n')
    return track_string



#WRITE OUT THE FILES

df = pd.read_csv('data/analytics.csv')
tracks = read_tracks(df, category='A')

#replaced by analytics above
#df = pd.read_csv('~/Documents/gitlab/snowflake/data/building.csv')
#tracks.extend(read_tracks(df, category='A', start_row=2))

df = pd.read_csv('data/executing.csv')
tracks.extend(read_tracks(df, category='B', start_col=2))

df = pd.read_csv('data/strengthening.csv')
tracks.extend(read_tracks(df, category='C', start_col=2))

df = pd.read_csv('data/supporting.csv')
tracks.extend(read_tracks(df, category='D', start_col=2))


#tracks
trackdata = (print_track_ids_json(tracks) + '\n\n'
             + print_milestone_names_json(tracks)  + '\n\n'
             + print_track_names_json(tracks)  + '\n\n'
             + print_tracks_json(tracks))

with open('trackdata.js', 'w') as trackout:
    trackout.write(trackdata)
    trackout.close()


#snowflakeapp
snowflakeapp = (print_empty_states_json(tracks) + '\n\n' + print_default_states_json(tracks))

with open('snowflakedata.js', 'w') as snowout:
    snowout.write(snowflakeapp)
    snowout.close()
