#!/usr/bin/perl

# 'The Power of Play'

use strict;
use warnings;

# The Power of Play

sub play {
	my $playActivity = shift;
	print "Let's play $playActivity!\n";
}

# A game of catch
sub gameOfCatch {
	my $numberOfPlayers = shift;
	print "Let's play catch with $numberOfPlayers people!\n";
}

# A game of tag
sub gameOfTag {
	my $numberOfPlayers = shift;
	print "Let's play tag with $numberOfPlayers people!\n";
}

# A card game
sub gameOfCards {
	my $numberOfPlayers = shift;
	print "Let's play cards with $numberOfPlayers people!\n";
}

# A board game
sub gameOfBoard {
	my $numberOfPlayers = shift;
	print "Let's play a board game with $numberOfPlayers people!\n";
}

# A game of hide-and-seek
sub gameOfHideAndSeek {
	my $numberOfPlayers = shift;
	print "Let's play hide-and-seek with $numberOfPlayers people!\n";
}

# A game of hopscotch
sub gameOfHopscotch {
	my $numberOfPlayers = shift;
	print "Let's play hopscotch with $numberOfPlayers people!\n";
}

# A game of catch with three players
gameOfCatch(3);

# A game of tag with four players
gameOfTag(4);

# A game of cards with five players
gameOfCards(5);

# A board game with six players
gameOfBoard(6);

# A game of hide-and-seek with seven players
gameOfHideAndSeek(7);

# A game of hopscotch with eight players
gameOfHopscotch(8);

# Play something new
play("Freeze Tag");