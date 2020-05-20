        <div class="player">
            <div class="layar" data-video="<?=$gambar?>">
                <!--modal-direct-auth-->
                <div id="load" data-offer="<?=$offer?>" data-act="direct">
                    <span class="proses"></span>
                </div>
                <div class="playPrimary">
                    <img src="images/play.png">
                </div>
            </div>
            <div class="control">
                <div class="playSecondary">
                    <button class="lengserbtn"><span id="play" class="icon-play"></span></button>
                </div>
                <div class="waktu" data-waktu="<?=$watch?>">
                    <div class="stream">
                        <blink>00:00:00</blink>/00:00:00
                    </div>
                    <div class="live">
                        <blink><svg width="8" height="8">
                                <ellipse style="fill:red;" cx="50%" cy="50%" rx="48%" ry="48%"></ellipse>
                            </svg>
                            Live</blink>
                    </div>
                </div>
                <div class="progressbar">
                    <div class="psbar red stripes">
                        <span style="width: 100%"></span>
                    </div>
                </div>
                <div class="quality lengserup">
                    <button class="lengserbtn"><span class="icon-atur"></span></button>
                    <ul class="lengserup-content">
                        <li>4K·2160p</li>
                        <li>HD·1080p</li>
                        <li>HD·720p</li>
                        <li>ED·480p</li>
                    </ul>
                </div>
                <div class="volume lengserup">
                    <button class="lengserbtn"><span class="icon-v-4"></span></button>
                    <ul class="lengserup-content">
                        <li><input type="range"></li>
                    </ul>
                </div>
                <div class="minmax">
                    <button class="lengserbtn"><span id="mm" class="icon-s-max"></span></button>
                </div>
            </div>
        </div>
