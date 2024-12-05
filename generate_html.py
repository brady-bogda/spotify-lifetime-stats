
data_text = """
# Artist Data
1. Jack Johnson, 21,900.0, 365.0, 5.88%
2. Morgan Wallen, 18,316.0, 305.0, 4.92%
3. Mac Miller, 15,029.0, 250.0, 4.04%
...

# Song Data
1. One Fine Morning, Bill Callahan, 3,902.0, 542, 65.0
2. Mona Lisas And Mad Hatters, Maren Morris, 1,733.0, 429, 29.0
...

# Album Data
1. Album A, Artist A, 4,500.0
2. Album B, Artist B, 3,700.0
...
"""


def parse_section(list):
    """Parses a section of text into a list of lists."""
    list = [line.strip() for line in list]
    # for line in list:
    #     data.append()
    data = [item.split("|") for item in list]
    return data


def generate_html(minutes, artist_data, song_data, album_data):
    """Generates HTML file content."""
    html_template = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wrapped</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="container">
            <header>
                <h1>Lifetime Wrapped</h1>
                <p class="total-minutes">Total Minutes: <span>{minutes}</span></p>
            </header>

            <section class="results">
                <div class="section">
                    <h2>Top 30 Artists</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Artist Name</th>
                                <th>Minutes</th>
                                <th>Hours</th>
                                <th>% of Minutes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {''.join(
                                f'<tr><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td></tr>'
                                for row in artist_data
                            )}
                        </tbody>
                    </table>
                </div>

                <div class="section">
                    <h2>Top 30 Songs</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Song Name</th>
                                <th>Artist Name</th>
                                <th>Minutes</th>
                                <th>Number of Listens</th>
                                <th>Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {''.join(
                                f'<tr><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td><td>{row[5]}</td></tr>'
                                for row in song_data
                            )}
                        </tbody>
                    </table>
                </div>

                <div class="section">
                    <h2>Top 30 Albums</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Album Name</th>
                                <th>Artist Name</th>
                                <th>Minutes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {''.join(
                                f'<tr><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>'
                                for row in album_data
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </body>
    </html>
    """
    return html_template


def main():
    # Parse the data
    artist_text = []
    song_text = []
    album_text = []

    with open("lifetime.txt", "r") as file:
        # while loop read lines
        line = file.readline()
        while line:
            if line[0] != "-":
                line = file.readline()
            else:
                print(line)
                break

        for i in range(4):
            file.readline()

        line = file.readline()
        minutes = line.split(" ")[-1]
        print(minutes)

        file.readline()
        file.readline()
        line = file.readline()

        top = int(line.split()[1])
        print(top)

        file.readline()

        for i in range(top):
            line = file.readline()
            artist_text.append(line)

        for i in range(5):
            file.readline()

        for i in range(top):
            line = file.readline()
            song_text.append(line)

        for i in range(5):
            file.readline()

        for i in range(top):
            line = file.readline()
            album_text.append(line)

    artist_data = parse_section(artist_text)
    print(artist_data)
    song_data = parse_section(song_text)
    print(song_data)
    album_data = parse_section(album_text)
    print(album_data)

    # Generate HTML
    html_content = generate_html(minutes, artist_data, song_data, album_data)

    # Write to an HTML file
    with open("music_wrapped.html", "w") as html_file:
        html_file.write(html_content)

    print("HTML file generated successfully.")


if __name__ == "__main__":
    main()
