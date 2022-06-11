import os
import discord
from discord.ext import commands
from music import Music

cogs = [Music]
client = commands.Bot(command_prefix= '?', intens = discord.Intents.all())

for i in range(len(cogs)):
  cogs[i].setup(client)

client.run('OTg0OTk3MzUyMzcwNzQ5NDUw.GhKlqw.8whH-ryJs87BZ0qLFRvw_0-JlZmo1XosNVpSyA')