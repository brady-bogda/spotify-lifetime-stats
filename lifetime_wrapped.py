import pandas as pd 
import os
import glob

pd.set_option('display.width', 1000)
pd.set_option('display.max_columns', None)
# get path of all files

num_top = int(input("Enter number of top songs|artists|albums: "))

csv_filepaths = glob.glob(os.path.join("data", "endsong_*.json"))

# merge all data into one dataframe
list_data = []
for filepath in csv_filepaths:
    temp_df = pd.read_json(filepath)
    list_data.append(temp_df)
lifetime_data = pd.concat(list_data, axis=0)



# parse the date into columns
lifetime_data["time"] = pd.to_datetime(lifetime_data["ts"])
lifetime_data["year"] = pd.DatetimeIndex(lifetime_data["time"]).year
lifetime_data["month"] = pd.DatetimeIndex(lifetime_data["time"]).month
lifetime_data["day"] = pd.DatetimeIndex(lifetime_data["time"]).day
lifetime_data = lifetime_data.loc[lifetime_data["year"] == 2022]
lifetime_data = lifetime_data.loc[lifetime_data["month"] != 11]

# drop columns 
cols_to_drop = {"incognito_mode", "time", "offline", "offline_timestamp", "platform", 
"username", "shuffle", "skipped", "ip_addr_decrypted", "user_agent_decrypted", "reason_end", 
"reason_start", "episode_show_name", "spotify_episode_uri", "episode_name", "spotify_track_uri"}
lifetime_data.drop(columns=cols_to_drop, inplace=True)


top_artists = lifetime_data \
.groupby(["master_metadata_album_artist_name"])["ms_played"].sum().reset_index(name="ms_played") \
.sort_values(by="ms_played", ascending=False).reset_index(drop=True)
top_artists.index = top_artists.index+1
top_artists.ms_played = round(top_artists.ms_played/60000, 0)
top_artists["Hours"] = round(top_artists.ms_played / 60)
top_artists.rename(columns={"master_metadata_album_artist_name": "Artist name", "ms_played": "Minutes"}, inplace=True)
top_artists["Percentage of Minutes"] = round(top_artists["Minutes"]/top_artists["Minutes"].sum()*100,2)



top_songs = lifetime_data  \
.groupby(["master_metadata_track_name","master_metadata_album_artist_name"])["ms_played"].agg(ms_played='sum', Number_of_listens='count').reset_index() \
.sort_values(by="Number_of_listens", ascending=False).reset_index(drop=True)
top_songs.index = top_songs.index+1
top_songs.ms_played = round(top_songs.ms_played/60000, 0)
top_songs["Hours"] = round(top_songs.ms_played / 60)
top_songs.rename(columns={"master_metadata_track_name": "Song name", "master_metadata_album_artist_name": "Artist name", "ms_played": "Minutes", "Number_of_listens": "Number of listens"}, inplace=True)


top_albums = lifetime_data  \
.groupby(["master_metadata_album_album_name","master_metadata_album_artist_name"])["ms_played"].sum().reset_index(name="ms_played") \
.sort_values(by="ms_played", ascending=False).reset_index(drop=True)
top_albums.index = top_albums.index+1
top_albums.ms_played = round(top_albums.ms_played/60000, 0)
top_albums["Hours"] = round(top_albums.ms_played / 60)
top_albums.rename(columns={"master_metadata_album_album_name": "Album name", "master_metadata_album_artist_name": "Artist name", "ms_played": "Minutes"}, inplace=True)


top_songs_winter = lifetime_data.loc[(lifetime_data["month"] == 12) | ((lifetime_data["month"] == 11) & (lifetime_data["day"] > 25)) ]
top_songs_winter = top_songs_winter.groupby(["master_metadata_track_name","master_metadata_album_artist_name"])["ms_played"].sum().reset_index(name="ms_played") \
.sort_values(by="ms_played", ascending=False).reset_index(drop=True)
top_songs_winter.index = top_songs_winter.index+1
top_songs_winter.ms_played = round(top_songs_winter.ms_played/60000, 0)
top_songs_winter["Hours"] = round(top_songs_winter.ms_played / 60)
top_songs_winter.rename(columns={"master_metadata_track_name": "Song name", "master_metadata_album_artist_name": "Artist name", "ms_played": "Minutes"}, inplace=True)

top_songs_summer = lifetime_data.loc[(lifetime_data["month"] > 5) & (lifetime_data["month"] < 9)]
top_songs_summer = top_songs_summer.groupby(["master_metadata_track_name","master_metadata_album_artist_name"])["ms_played"].sum().reset_index(name="ms_played") \
.sort_values(by="ms_played", ascending=False).reset_index(drop=True)
top_songs_summer.index = top_songs_summer.index+1
top_songs_summer.ms_played = round(top_songs_summer.ms_played/60000, 0)
top_songs_summer["Hours"] = round(top_songs_summer.ms_played / 60)
top_songs_summer.rename(columns={"master_metadata_track_name": "Song name", "master_metadata_album_artist_name": "Artist name", "ms_played": "Minutes"}, inplace=True)

# print("MINUTES SUMMER: ", top_songs_summer["Minutes"].sum())
# print(top_songs_summer.head(10))

print("-----------------------------------------------")
print("Printing Spotify Wrapped LIFETIME STATS\n\n")


print("**************")
print("TOTAL MINUTES:  ", top_artists["Minutes"].sum())
print("**************\n")

print("TOP ", num_top, " ARTISTS")
print(top_artists.head(num_top))
print("\n\nTOP ", num_top, " SONGS")
print(top_songs.head(num_top))
print("\n\nTOP ", num_top, " ALBUMS")
print(top_albums.head(num_top))
# .sum().sort_values(by="ms_played").head())

print("\nlive, laugh, love wrapped\n---------------------------------------------")
